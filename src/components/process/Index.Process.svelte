<script>
	import Video from "$components/process/Video.svelte";
	import Chat from "$components/process/Chat.svelte";
	import { side, currentVideoId, currentVideoY } from "$stores/misc.js";
	import copy from "$data/copy.json";
	import { onMount } from "svelte";

	onMount(() => {
		const spans = document.querySelectorAll("span");
		spans.forEach((span) => {
			span.addEventListener("click", () => {
				if ($currentVideoId) {
					$currentVideoId = undefined;
					$currentVideoY = undefined;
				} else {
					$currentVideoId = span.dataset.video;
					$currentVideoY = span.offsetTop;
				}
			});
		});
	});
</script>

<div id="process" class:visible={$side === "left"}>
	<article>
		<h1>{copy.hed}</h1>
		<div class="byline">{@html copy.byline}</div>

		{#each copy.process as { type, value, description, prompt, response }}
			{#if type === "text"}
				<p>{@html value}</p>
			{:else if type === "heading"}
				<h3>{@html value}</h3>
			{:else if type === "list"}
				<ul>
					{#each value as item}
						<li>{@html item}</li>
					{/each}
				</ul>
			{:else if type === "chat"}
				<Chat {description} {prompt} {response} />
			{/if}
		{/each}

		<Video />
	</article>
</div>

<style>
	#process {
		width: 90vw;
		opacity: 0.2;
		transition: opacity calc(var(--1s) * 0.4);
	}
	#process.visible {
		opacity: 1;
	}
	article {
		max-width: 40rem;
		margin: 4rem 250px;
		font-family: var(--font-serif);
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
	ul {
		padding-left: 3rem;
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
	:global(span) {
		white-space: nowrap;
		border: 3px solid lightsteelblue;
		border-radius: 5px;
		padding: 0px 4px;
	}
	:global(span:hover) {
		cursor: pointer;
		background: lightsteelblue;
	}
</style>
