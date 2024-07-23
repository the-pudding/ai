<script>
	import { onMount } from "svelte";
	import * as d3 from "d3";

	let data = [];
	let width = 0;
	let height = 600;
	let margin = { top: 20, right: 20, bottom: 50, left: 100 };
	let minSongs = 3;

	let chartWidth = 0;
	let chartHeight = height - margin.top - margin.bottom;

	let tooltipVisible = false;
	let tooltipX = 0;
	let tooltipY = 0;
	let tooltipText = "";

	let chartContainer;

	onMount(async () => {
		const response = await fetch("assets/billboard.csv");
		const csvData = await response.text();
		data = await d3.csvParse(csvData, (d) => ({
			performer: d.performer.split(", "),
			sentiment: d.Sentiment === "Positive" ? 1 : -1,
			title: d.title
		}));

		data = d3.flatRollup(
			data,
			(v) => ({
				sentiment: d3.sum(v, (d) => d.sentiment) / v.length,
				count: v.length
			}),
			(d) => d.performer.join(", ")
		);

		data = data
			.map(([performer, { sentiment, count }]) => ({
				performer,
				sentiment,
				count
			}))
			.filter((d) => d.count >= minSongs)
			.sort((a, b) => d3.descending(a.sentiment, b.sentiment));

		if (typeof window !== "undefined") {
			createChart();
			window.addEventListener("resize", handleResize);
		}

		handleResize();

		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("resize", handleResize);
			}
		};
	});

	function handleResize() {
		if (chartContainer) {
			width = chartContainer.clientWidth;
			chartWidth = width - margin.left - margin.right;
			createChart();
		}
	}

	function createChart() {
		const svg = d3.select("#chart");

		svg.selectAll("*").remove();

		svg.attr("width", width).attr("height", height);

		const y = d3
			.scaleLinear()
			.domain(d3.extent(data, (d) => d.sentiment))
			.range([chartHeight, 0]);

		const radius = d3
			.scaleSqrt()
			.domain([0, d3.max(data, (d) => d.count)])
			.range([0, 10]);

		const simulation = d3
			.forceSimulation(data)
			.force("x", d3.forceX(chartWidth / 2))
			.force(
				"y",
				d3.forceY((d) => y(d.sentiment))
			)
			.force(
				"collision",
				d3.forceCollide().radius((d) => radius(d.count) + 2)
			)
			.stop();

		for (let i = 0; i < 300; ++i) simulation.tick();

		svg
			.append("g")
			.attr("transform", `translate(${margin.left},${margin.top})`)
			.selectAll("circle")
			.data(data)
			.enter()
			.append("circle")
			.attr("cx", (d) => d.x)
			.attr("cy", (d) => d.y)
			.attr("r", (d) => radius(d.count))
			.attr("fill", (d) =>
				d.sentiment > 0 ? "var(--chart-color-2)" : "var(--chart-color-1)"
			)
			.attr("tabindex", "0")
			.attr("role", "graphics-symbol")
			.attr("aria-roledescription", "circle")
			.attr(
				"aria-label",
				(d) =>
					`${d.performer}: Sentiment ${d.sentiment.toFixed(2)}, Songs ${d.count}`
			)
			.on("mouseover focus", function (event, d) {
				d3.select(this).attr("opacity", 0.8);
				tooltipVisible = true;
				tooltipX = event.pageX;
				tooltipY = event.pageY;
				tooltipText = d.performer;
			})
			.on("mouseout blur", function () {
				d3.select(this).attr("opacity", 1);
				tooltipVisible = false;
			})
			.on("click", function (event, d) {
				if (tooltipVisible && tooltipText === d.performer) {
					tooltipVisible = false;
				} else {
					tooltipVisible = true;
					tooltipX = event.pageX;
					tooltipY = event.pageY;
					tooltipText = d.performer;
				}
			});

		// Add x-axis label
		svg
			.append("text")
			.attr("class", "x-label")
			.attr("text-anchor", "middle")
			.attr("x", width / 2)
			.attr("y", height - 10)
			.text("Performer");

		// Add y-axis label
		svg
			.append("text")
			.attr("class", "y-label")
			.attr("text-anchor", "middle")
			.attr("transform", "rotate(-90)")
			.attr("x", -height / 2)
			.attr("y", 20)
			.text("Sentiment Score");
	}
</script>

<div class="chart-container" bind:this={chartContainer} id="show-scatterplot">
	<svg id="chart" {width} {height}>
		<title>Artist Sentiment Scores</title>
	</svg>
	{#if tooltipVisible}
		<div
			class="tooltip"
			style="left: {tooltipX}px; top: {tooltipY}px; background-color: white; color: black; padding: 5px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); z-index: 9999;"
		>
			{tooltipText}
		</div>
	{/if}
</div>

<style>
	.chart-container {
		width: 100%;
		height: 100%;
		position: relative;
	}

	:global(.x-label, .y-label) {
		font-size: 14px;
		font-weight: bold;
	}
</style>
