<script>
	import Video from "$components/process/Video.svelte";
	import Chat from "$components/process/Chat.svelte";
	import { side, currentVideoId, currentVideoY } from "$stores/misc.js";
	import copy from "$data/copy.json";
	import { onMount } from "svelte";

	onMount(() => {
		const span = document.querySelector("span.switch");
		span.addEventListener("click", () => {
			$side = "right";
		});
	});

	$: console.log({ copy });
</script>

<div id="process" class:visible={$side === "left"}>
	<div class="videos">
		<!-- <Video /> -->
	</div>

	<div class="text">
		<h1>{copy.hed}</h1>
		<div class="byline">{@html copy.byline}</div>

		{#each copy.process as { type, value }}
			{#if type === "text"}
				<p>{@html value}</p>
			{:else if type === "heading"}
				<h3 id={value.id}>{@html value.text}</h3>
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
			{:else if type === "reaction"}
				<details class="reaction">
					<summary>
						Our grade: <strong>{value.grade}</strong>
						<span>{value.summary}</span>
					</summary>
					{#each value.text as d}
						<p>{@html d.value}</p>
					{/each}
				</details>
			{/if}
		{/each}
	</div>

	<div class="videos" />
</div>

<style>
	#process {
		display: flex;
		width: 90vw;
		opacity: 0.2;
		transition: opacity calc(var(--1s) * 0.4);
	}
	#process.visible {
		opacity: 1;
	}
	.text {
		max-width: 40rem;
		font-family: var(--font-serif);
		margin-top: 5rem;
	}
	.videos {
		width: 100%;
		height: 100%;
		min-width: 200px;
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
	:global(span.switch) {
		background: lightblue;
	}
</style>
