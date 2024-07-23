<script>
	import { onMount } from "svelte";
	import { csv } from "d3-fetch";
	import { scaleTime, scaleLinear } from "d3-scale";
	import { line } from "d3-shape";
	import { extent, rollups } from "d3-array";
	import { timeFormat } from "d3-time-format";

	let data = [];
	const emotions = [
		"anger",
		"anticipation",
		"disgust",
		"fear",
		"joy",
		"sadness",
		"surprise",
		"trust"
	];
	const colors = [
		"#e41a1c",
		"#377eb8",
		"#4daf4a",
		"#984ea3",
		"#ff7f00",
		"#f781bf",
		"#a65628",
		"#ffff33"
	];

	let width = 200;
	let height = 150;
	let chartRefs = new Array(emotions.length);

	const margin = { top: 20, right: 20, bottom: 30, left: 40 };
	const chartWidth = width - margin.left - margin.right;
	const chartHeight = height - margin.top - margin.bottom;

	const formatDate = timeFormat("%Y");

	let xScale;
	let yScale;
	let lineGenerators;

	const normalizeEmotions = (emotionObj) => {
		const sum = Object.values(emotionObj).reduce((acc, val) => acc + val, 0);
		return Object.entries(emotionObj).reduce((acc, [emotion, value]) => {
			acc[emotion] = value / sum;
			return acc;
		}, {});
	};

	const processData = (data) => {
		const filteredData = data.filter((d) => {
			const year = +d.chart_week.slice(0, 4);
			return year >= 1960 && year <= 2020;
		});

		const groupedData = rollups(
			filteredData,
			(v) => {
				const emotionSums = v.reduce(
					(acc, d) => {
						try {
							const parsedEmotions = eval("(" + d.Emotions + ")");
							if (Object.keys(parsedEmotions).length > 0) {
								const normalizedEmotions = normalizeEmotions(parsedEmotions);
								emotions.forEach((emotion) => {
									acc[emotion] += normalizedEmotions[emotion] || 0;
								});
							}
						} catch (error) {
							console.warn("Error parsing emotions:", d.Emotions);
						}
						return acc;
					},
					Object.fromEntries(emotions.map((emotion) => [emotion, 0]))
				);

				const totalSongs = v.length;
				const averageEmotions = Object.entries(emotionSums).reduce(
					(acc, [emotion, sum]) => {
						acc[emotion] = sum / totalSongs;
						return acc;
					},
					{}
				);

				return averageEmotions;
			},
			(d) => d.chart_week.slice(0, 4)
		);

		return Array.from(groupedData, ([year, emotionData]) => ({
			year: new Date(year),
			...emotionData
		}));
	};

	onMount(async () => {
		data = processData(await csv("assets/billboard.csv"));

		xScale = scaleTime()
			.domain(extent(data, (d) => d.year))
			.range([0, chartWidth]);

		yScale = scaleLinear().domain([0, 0.5]).range([chartHeight, 0]);

		lineGenerators = emotions.map((emotion) =>
			line()
				.x((d) => xScale(d.year))
				.y((d) => yScale(d[emotion]))
				.defined(
					(d) => d.year >= new Date("1960") && d.year <= new Date("2020")
				)
		);
	});
</script>

<div class="chart-container" id="show-multiples">
	{#if data.length > 0}
		<h3 class="chart-title">Average Emotions in Songs Over Time</h3>
		<div class="small-multiples">
			{#each emotions as emotion, i}
				<div class="chart-wrapper" bind:this={chartRefs[i]}>
					<svg {width} {height}>
						<g transform="translate({margin.left}, {margin.top})">
							<path
								class="chart-line"
								d={lineGenerators[i](data)}
								stroke={colors[i]}
							/>
							<g class="x-axis" transform="translate(0, {chartHeight})">
								{#each xScale.ticks(3) as tick}
									<g class="tick" transform="translate({xScale(tick)}, 0)">
										<line y2="6" stroke="currentColor" />
										<text dy="0.71em" y="9" text-anchor="middle"
											>{formatDate(tick)}</text
										>
									</g>
								{/each}
							</g>
							<g class="y-axis">
								{#each yScale.ticks(3) as tick}
									<g class="tick" transform="translate(0, {yScale(tick)})">
										<line x2={chartWidth} stroke="currentColor" />
										<text x="-9" dy="0.32em" text-anchor="end">{tick}</text>
									</g>
								{/each}
							</g>
						</g>
					</svg>
					<div class="chart-title">{emotion}</div>
				</div>
			{/each}
		</div>
		<p class="chart-description">
			These small multiples reveal the evolving emotional landscape of popular
			music, with negative emotions like sadness, fear, and anger on the rise,
			while joy, though still prevalent, shows a relative decline.
		</p>
	{/if}
</div>

<style>
	.chart-container {
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
	}

	.chart-title {
		font-family: var(--font-sans);
		font-size: 20px;
		margin-bottom: 10px;
		text-align: center;
	}

	.small-multiples {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 20px;
		margin-bottom: 20px;
	}

	.chart-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.chart-line {
		fill: none;
		stroke-width: 1.5;
	}

	.x-axis,
	.y-axis {
		font-family: var(--font-sans);
		font-size: 10px;
	}

	.tick line {
		stroke: var(--text-color);
		stroke-opacity: 0.2;
	}

	.tick text {
		fill: var(--text-color);
	}

	.chart-title {
		font-family: var(--font-sans);
		font-size: 14px;
		margin-top: 10px;
		text-align: center;
		text-transform: capitalize;
	}

	.chart-description {
		font-family: var(--font-serif);
		font-size: 16px;
		line-height: 1.6;
		text-align: center;
	}
</style>
