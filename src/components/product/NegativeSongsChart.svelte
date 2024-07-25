<script>
	import { onMount } from "svelte";
	import { csv } from "d3-fetch";
	import { scaleTime, scaleLinear } from "d3-scale";
	import { line } from "d3-shape";
	import { extent } from "d3-array";
	import { timeFormat } from "d3-time-format";

	let data = [];
	let width = 800;
	let height = 400;
	let chartRef;

	$: margin = { top: 20, right: 30, bottom: 30, left: 40 };
	$: chartWidth = width - margin.left - margin.right;
	$: chartHeight = height - margin.top - margin.bottom;

	const formatDate = timeFormat("%Y");

	$: xScale = scaleTime()
		.domain(extent(data, (d) => d.year))
		.range([0, chartWidth]);

	$: yScale = scaleLinear().domain([0, 1]).range([chartHeight, 0]);

	$: chartLine = line()
		.x((d) => xScale(d.year))
		.y((d) => yScale(d.percentage))
		.defined((d) => d.year >= new Date("1960") && d.year <= new Date("2020"));

	const processData = (data) => {
		const filtered = data.filter((d) => {
			const year = +d.chart_week.slice(0, 4);
			return year >= 1960 && year <= 2020;
		});

		const grouped = filtered.reduce((acc, d) => {
			const year = d.chart_week.slice(0, 4);
			if (!acc[year]) {
				acc[year] = { total: 0, negative: 0 };
			}
			acc[year].total++;
			if (d.Sentiment === "Negative") {
				acc[year].negative++;
			}
			return acc;
		}, {});

		return Object.entries(grouped).map(([year, { total, negative }]) => ({
			year: new Date(year),
			percentage: negative / total
		}));
	};

	onMount(async () => {
		data = processData(await csv("assets/billboard.csv"));
	});

	function handleResize() {
		width = chartRef.clientWidth;
	}
</script>

<div
	class="chart-container"
	bind:this={chartRef}
	on:resize={handleResize}
	id="line-chart"
>
	{#if data.length > 0}
		<h3 class="chart-title">Percentage of Negative Songs Over Time</h3>
		<svg {width} {height}>
			<g transform="translate({margin.left}, {margin.top})">
				<path class="chart-line" d={chartLine(data)} />
				<g class="x-axis" transform="translate(0, {chartHeight})">
					{#each xScale.ticks(10) as tick}
						<g class="tick" transform="translate({xScale(tick)}, 0)">
							<line y2="6" stroke="currentColor" />
							<text dy="0.71em" y="9" text-anchor="middle"
								>{formatDate(tick)}</text
							>
						</g>
					{/each}
				</g>
				<g class="y-axis">
					{#each yScale.ticks(5) as tick}
						<g class="tick" transform="translate(0, {yScale(tick)})">
							<line x2={chartWidth} stroke="currentColor" />
							<text x="-9" dy="0.32em" text-anchor="end">{tick * 100}%</text>
						</g>
					{/each}
				</g>
			</g>
		</svg>
		<p class="chart-description">
			This chart reveals a clear upward trend in the percentage of songs with a
			predominantly negative emotional sentiment, particularly since the
			mid-2010s.
		</p>
	{/if}
</div>

<style>
	.chart-container {
		width: 100%;
		max-width: 800px;
		margin: 0 auto;

		overflow-x: hidden; /* added by human */
	}

	.chart-title {
		font-family: var(--font-sans);
		font-size: 20px;
		margin-bottom: 10px;
		text-align: center;
	}

	.chart-line {
		fill: none;
		stroke: var(--accent-color);
		stroke-width: 2;
	}

	.x-axis,
	.y-axis {
		font-family: var(--font-sans);
		font-size: 12px;
	}

	.tick line {
		stroke: var(--text-color);
		stroke-opacity: 0.2;
	}

	.tick text {
		fill: var(--text-color);
	}

	.chart-description {
		font-family: var(--font-serif);
		font-size: 16px;
		line-height: 1.6;
		margin-top: 20px;
		text-align: center;
	}
</style>
