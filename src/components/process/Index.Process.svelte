<script>
	import Chat from "$components/process/Chat.svelte";
	import { side } from "$stores/misc.js";
	import copy from "$data/copy.json";

	const goTo = (id) => {
		$side = "right";
		setTimeout(() => {
			const element = document.getElementById(id);
			element.scrollIntoView({ behavior: "smooth" });
		}, 500);
	};
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
			{:else if type === "chat"}
				<Chat {description} {prompt} {response} />
			{/if}
		{/each}
	</article>
</div>

<style>
	#process {
		color: black;
		width: 90vw;
		opacity: 0.2;
		transition: opacity calc(var(--1s) * 0.4);
	}
	#process.visible {
		opacity: 1;
	}
	article {
		max-width: 650px;
		margin: 3rem auto;
		font-family: var(--font-serif);
	}
	h1,
	.byline {
		text-align: center;
	}
</style>
