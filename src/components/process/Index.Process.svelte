<script>
	import { createEventDispatcher } from "svelte";
	import Chat from "$components/process/Chat.svelte";
	import Header from "$components/process/Header.svelte";
	import { side } from "$stores/misc.js";
	import copy from "$data/copy.json";
	import { annotate } from "rough-notation";
	import { onMount } from "svelte";
	import inView from "$actions/inView.js";

	const dispatch = createEventDispatcher();
	let annotation;

	const onEnter = () => {
		if (annotation) annotation.show();
	};
	const onExit = () => {
		if (annotation) annotation.hide();
	};

	onMount(() => {
		const finalGrade = document.querySelector(
			"table tr:last-child td:last-child"
		);
		annotation = annotate(finalGrade, {
			type: "circle",
			animate: true,
			animationDuration: 1000,
			color: "var(--color-ai-orange-og)"
		});
		annotation.show();
	});
</script>

<div id="process" class:visible={$side === "left"}>
	<div class="switcher">
		<button on:click={() => dispatch("switch", "right")}>
			Read Claude’s story &rarr;
		</button>
	</div>

	<Header></Header>
	<article>
		<h1><strong>{copy.hed}</strong></h1>
		<div class="byline">{@html copy.byline}</div>

		{#each copy.process as { type, value }}
			{#if type === "text"}
				<p>{@html value}</p>
			{:else if type === "heading"}
				<h2 id={value.id}><strong>{@html value.text}</strong></h2>
			{:else if type === "cta"}
				<button class="cta" on:click={() => ($side = "right")}>
					<p>{@html value}</p>
				</button>
			{:else if type === "ul"}
				<ul>
					{#each value as item}
						<li>{@html item}</li>
					{/each}
				</ul>
			{:else if type === "ol"}
				<ol>
					{#each value as item}
						<li><a href="#{item.id}">{@html item.text}</a></li>
					{/each}
				</ol>
			{:else if type === "chat"}
				<Chat {...value} />
			{:else if type === "figure"}
				<figure>
					<img src="assets/img/{value.src}" alt={value.alt} />
					<figcaption>{value.caption}</figcaption>
				</figure>
			{:else if type === "figure-grid"}
				<div class="grid">
					{#each value.figures as { src, alt, caption }}
						<figure>
							<img src="assets/img/{src}" {alt} />
							<figcaption>{caption}</figcaption>
						</figure>
					{/each}
				</div>
			{:else if type === "reaction"}
				<div class="reaction">
					<h3><strong>Our grade: {value.grade}</strong></h3>
					<span class="summary">{value.summary}</span>
					<div class="text">
						{#each value.text as { value }}
							<p>{@html value}</p>
						{/each}
					</div>
				</div>
			{:else if type === "report-card"}
				<div class="report" use:inView on:enter={onEnter} on:exit={onExit}>
					<h2><strong>{value.title}</strong></h2>
					<table>
						{#each value.sections as { id, text, grade }}
							<tr>
								<td>
									{#if id === "overall"}
										{text}
									{:else}
										<a href="#{id}">{text}</a>
									{/if}
								</td>
								<td class="grade"><strong>{grade}</strong></td>
							</tr>
						{/each}
					</table>
				</div>
			{:else if type === "video"}
				<figure>
					<!-- svelte-ignore a11y-media-has-caption -->
					<video preload autoplay="true" loop muted>
						<source src="assets/{value.src}" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					<figcaption><small>{value.caption}</small></figcaption>
				</figure>
			{:else if type === "editorNote"}
				<p class="note"><strong>Editor’s Note:</strong> {value}</p>
			{:else if type === "footnote"}
				{#each value as { value }}
					<p class="footnote">{@html value}</p>
				{/each}
			{/if}
		{/each}
	</article>
</div>

<style>
	#process {
		width: 90vw;
		position: relative;
		background: var(--color-bg);
		padding-bottom: 64px;
	}

	article {
		width: 100%;
		max-width: calc(40rem + 32px);
		margin: 32px auto;
		padding: 0 16px;
		font-family: var(--font-sans);
		font-size: var(--18px);
	}

	h1 {
		font-size: var(--80px);
		line-height: 1;
	}

	h2 {
		font-size: var(--32px);
		margin: 64px 0 16px 0;
	}

	h3 {
		font-size: var(--24px);
		margin: 16px 0;
	}

	p,
	li {
		line-height: 1.6;
	}

	ul,
	ol {
		padding-left: 32px;
	}

	li {
		margin-bottom: 8px;
	}

	.byline {
		margin: 32px 0;
	}

	table {
		table-layout: auto;
	}

	td {
		padding: 16px;
		vertical-align: center;
		line-height: 1;
	}

	tr:last-child td:first-child {
		font-weight: bold;
	}

	td.grade {
		font-size: var(--32px);
		width: 32px;
	}

	.cta {
		background: var(--color-fg);
		color: var(--color-bg);
		padding: 16px;
		margin: 32px 0;
		cursor: pointer;
		text-align: left;
		font-family: var(--sans);
	}

	.cta p {
		margin: 0;
	}

	.reaction h3 {
		margin: 0;
		margin-bottom: 8px;
	}

	.reaction {
		border-left: 4px solid var(--color-fg);
		padding: 0 16px;
	}

	.reaction .text {
		font-size: var(--14px);
	}

	.report table {
		border-left: 4px solid var(--color-fg);
		padding: 0 16px;
	}

	figure {
		margin: 32px 0;
	}

	figure img,
	figure video {
		border: 4px solid var(--color-fg);
	}

	figcaption {
		margin-top: 6px;
		line-height: 1.2;
		font-size: var(--14px);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1rem;
		margin: 2rem 0;
	}
	.grid figure {
		margin: 0;
	}
	:global(code:not(pre code)) {
		background: var(--color-ai-orange-og);
		padding: 2px 6px;
		font-size: var(--16px);
	}

	:global(#process a) {
		color: var(--color-ai-green);
		text-decoration: none;
		border-bottom: 2px solid var(--color-ai-green);
	}

	:global(#process a:hover) {
		color: var(--color-fg);
		border-bottom: 2px solid var(--color-fg);
	}

	.note {
		border-left: 4px solid var(--color-fg);
		padding: 0 16px;
	}

	.switcher {
		position: sticky;
		top: 50%;
		right: 0;
		text-align: right;
		opacity: 0;
		transition: opacity calc(var(--1s) * 0.5);
		pointer-events: none;
	}

	.visible .switcher {
		opacity: 1;
	}

	.switcher button {
		font-size: var(--18px);
		padding: 16px;
		background: var(--color-claude-bg);
		color: var(--color-bg);
		transform: translateX(calc(10vw - 16px));
		pointer-events: auto;
		transition: transform calc(var(--1s) * 0.2);
	}

	.switcher button:hover {
		transform: translateX(calc(10vw - 6px));
	}

	.footnote {
		font-size: var(--16px);
		margin-top: 4rem;
	}
</style>
