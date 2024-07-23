<script>
	import { onMount } from "svelte";
	import * as d3 from "d3";

	let data = [];
	let width = 0;
	let height = 400;
	let margin = { top: 50, right: 50, bottom: 50, left: 50 };
	let emotions = [
		"anger",
		"anticipation",
		"disgust",
		"joy",
		"surprise",
		"trust",
		"fear",
		"sadness"
	];

	let chartWidth = 0;
	let chartHeight = height - margin.top - margin.bottom;
	let chartRadius = 0;

	let chartContainer;

	const artistsToCompare = ["Billie Eilish", "Ariana Grande"];

	onMount(async () => {
		const response = await fetch("assets/billboard.csv");
		const csvData = await response.text();
		data = await d3.csvParse(csvData, (d) => ({
			performer: d.performer.split(", "),
			emotions: JSON.parse(d.Emotions.replace(/'/g, '"')),
			title: d.title
		}));

		data = d3.flatRollup(
			data,
			(v) => {
				const normalizedEmotions = v.map((d) => {
					const emotionSum = d3.sum(Object.values(d.emotions));
					return Object.fromEntries(
						Object.entries(d.emotions).map(([emotion, value]) => [
							emotion,
							value / emotionSum
						])
					);
				});

				const emotionAverages = emotions.reduce((acc, emotion) => {
					acc[emotion] = d3.mean(normalizedEmotions, (d) => d[emotion] || 0);
					return acc;
				}, {});

				return emotionAverages;
			},
			(d) => d.performer.join(", ")
		);

		data = Array.from(data, ([performer, emotions]) => ({
			performer,
			emotions
		})).filter((d) => artistsToCompare.includes(d.performer));

		if (typeof window !== "undefined") {
			handleResize();
			window.addEventListener("resize", handleResize);
		}

		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("resize", handleResize);
			}
		};
	});

	function handleResize() {
		if (chartContainer) {
			width = chartContainer.clientWidth;
			chartWidth = (width - margin.left - margin.right) / 2;
			chartRadius = Math.min(chartWidth, chartHeight) / 2;
			createChart();
		}
	}

	function createChart() {
		const svg = d3.select(chartContainer).select("svg");

		svg.selectAll("*").remove();

		svg.attr("width", width).attr("height", height);

		const angleScale = d3
			.scalePoint()
			.domain(emotions)
			.range([0, 2 * Math.PI]);

		const radiusScale = d3.scaleLinear().domain([0, 1]).range([0, chartRadius]);

		const line = d3
			.lineRadial()
			.angle((d) => angleScale(d[0]))
			.radius((d) => radiusScale(d[1]));

		data.forEach((artistData, i) => {
			const chartGroup = svg
				.append("g")
				.attr("class", "chart-group")
				.attr(
					"transform",
					`translate(${margin.left + chartWidth / 2 + i * (chartWidth + margin.right)},${height / 2})`
				);

			const axis = chartGroup.append("g").attr("class", "axis");

			axis
				.selectAll("line")
				.data(emotions)
				.enter()
				.append("line")
				.attr("x1", 0)
				.attr("y1", 0)
				.attr("x2", (d) => radiusScale(1) * Math.cos(angleScale(d)))
				.attr("y2", (d) => radiusScale(1) * Math.sin(angleScale(d)))
				.attr("stroke", "currentColor")
				.attr("stroke-width", 1);

			axis
				.selectAll("text")
				.data(emotions)
				.enter()
				.append("text")
				.attr("x", (d) => radiusScale(1.1) * Math.cos(angleScale(d)))
				.attr("y", (d) => radiusScale(1.1) * Math.sin(angleScale(d)))
				.attr("dy", "0.35em")
				.attr("text-anchor", "middle")
				.text((d) => d);

			chartGroup
				.append("path")
				.attr("class", "radar-line")
				.attr("d", line(Object.entries(artistData.emotions)))
				.attr("fill", `rgba(${i * 255}, ${255 - i * 255}, 255, 0.2)`)
				.attr("stroke", `rgb(${i * 255}, ${255 - i * 255}, 255)`)
				.attr("stroke-width", 2);

			chartGroup
				.append("text")
				.attr("class", "artist-label")
				.attr("x", 0)
				.attr("y", -chartRadius - 20)
				.attr("text-anchor", "middle")
				.text(artistData.performer);
		});
	}
</script>

<div class="chart-container" bind:this={chartContainer} id="show-radar">
	<svg class="radar-chart">
		<title>Artist Emotion Comparison</title>
	</svg>
</div>

<style>
	.chart-container {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.artist-label {
		font-size: 16px;
		font-weight: bold;
	}
</style>
