<script>
	import Chat from "$components/process/Chat.svelte";
	import { side } from "$stores/misc.js";
	import copy from "$data/copy.json";

	// $: console.log({ copy });
</script>

<div id="process" class:visible={$side === "left"}>
	<h1>{copy.hed}</h1>
	<div class="byline">{@html copy.byline}</div>

	{#each copy.process as { type, value }}
		{#if type === "text"}
			<p>{@html value}</p>
		{:else if type === "heading"}
			<h3 id={value.id}>{@html value.text}</h3>
		{:else if type === "callout"}
			<div class="callout" on:click={() => ($side = "right")}>
				{#each value as text}
					<p>{@html text.value}</p>
				{/each}
			</div>
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
		{:else if type === "reaction"}
			<div class="reaction">
				<h4>Our grade: <strong>{value.grade}</strong></h4>
				<span class="summary">{value.summary}</span>

				{#each value.text as d}
					<p>{@html d.value}</p>
				{/each}
			</div>
		{:else if type === "video"}
			<figure>
				<!-- svelte-ignore a11y-media-has-caption -->
				<video preload autoplay="true" loop muted>
					<source src="assets/{value.src}" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<figcaption>{value.caption}</figcaption>
			</figure>
		{/if}
	{/each}
</div>

<style>
	#process {
		max-width: 40rem;
		margin: 5rem auto;
		font-family: var(--font-serif);
		opacity: 0.2;
		transition: opacity calc(var(--1s) * 0.4);
	}
	#process.visible {
		opacity: 1;
	}
	.byline {
		margin-bottom: 3rem;
	}
	h1,
	.byline {
		text-align: center;
	}
	h1,
	h3 {
		font-weight: bold;
	}
	h3 {
		font-size: 2rem;
		margin-top: 4rem;
	}
	ul,
	ol {
		padding-left: 3rem;
	}
	.callout {
		background: var(--color-gray-100);
		padding: 0.25rem 1rem;
	}
	.callout:hover {
		cursor: pointer;
		background: var(--color-gray-200);
	}
	.reaction {
		border-left: 4px solid var(--color-green);
		background: rgb(52 162 158 / 20%);
		padding: 0.25rem 1rem;
	}
	.reaction h4 {
		font-size: 1.25rem;
	}
	.reaction .summary {
		font-style: italic;
	}
	figure {
		margin: 2rem 0;
	}
	figcaption {
		font-family: var(--font-sans);
		font-size: 0.8rem;
		color: var(--color-gray-600);
		margin-top: 0.5rem;
	}
	:global(p code) {
		background: var(--color-gray-100);
		border: 1px solid var(--color-gray-300);
		border-radius: 4px;
		padding: 0 4px;
		font-size: 0.9rem;
		color: #c3617a;
	}
	:global(#process a) {
		color: var(--color-fg);
		text-decoration: none;
		border-bottom: 1px solid var(--color-fg);
	}
	:global(#process a:hover) {
		color: var(--color-gray-600);
		border-bottom: 1px solid var(--color-gray-600);
	}
</style>
