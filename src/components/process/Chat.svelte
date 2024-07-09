<script>
	import snarkdown from "snarkdown";
	import code1 from "$data/code/code1.txt?raw";

	export let prompt;
	export let response;
	export let summary;
	export let expandPrompt;
	export let expandResponse;

	const codes = {
		code1
	};
</script>

<div class="chat">
	{#if prompt && response}
		<details class="prompt" open={!!expandPrompt}>
			<summary>Our prompt TLDR {summary ? `: ${summary}` : ""}</summary>
			{#each prompt as { type, value }}
				<div>{@html snarkdown(value)}</div>
			{/each}
		</details>

		<details class="response" open={!!expandResponse}>
			<summary>See Claude's response 🤖</summary>
			{#each response as { type, value }}
				{#if type === "text"}
					<div>{@html snarkdown(value)}</div>
				{:else if type === "code"}
					<pre><code>{codes[`code${value}`]}</code></pre>
				{/if}
			{/each}
		</details>
	{:else}
		<div>{summary}</div>
	{/if}
</div>

<style>
	.chat {
		border: 2px solid var(--color-gray-600);
		border-radius: 10px;
		margin: 2rem 0;
	}
	details {
		padding: 1rem;
		max-height: 300px;
		overflow: scroll;
	}
	.prompt {
		font-family: var(--font-sans);
		font-size: 0.9rem;
		background: var(--color-gray-100);
		border-radius: 10px 10px 0 0;
	}
	.response {
		font-family: var(--font-mono);
		background: #d1dbe7;
		border-radius: 0 0 10px 10px;
	}
	code {
		font-size: 0.8rem;
	}
</style>
