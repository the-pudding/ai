<script>
	import snarkdown from "snarkdown";
	import code1a from "$data/code/1a.txt?raw";
	import code1b from "$data/code/1b.txt?raw";
	import code1c from "$data/code/1c.txt?raw";
	import code2a from "$data/code/2a.txt?raw";
	import code3a from "$data/code/3a.txt?raw";
	import code3b from "$data/code/3b.txt?raw";
	import code4a from "$data/code/4a.txt?raw";
	import code5a from "$data/code/5a.txt?raw";

	export let prompt;
	export let response;
	export let summary;
	export let expandPrompt;
	export let expandResponse;

	const codes = {
		code1a,
		code1b,
		code1c,
		code2a,
		code3a,
		code3b,
		code4a,
		code5a
	};
</script>

<div class="chat">
	{#if prompt && response}
		<details class="prompt" open={!!expandPrompt}>
			<summary>{summary}</summary>
			{#each prompt as { type, value }}
				<div>{@html snarkdown(value)}</div>
			{/each}
		</details>

		<details class="response" open={!!expandResponse}>
			<summary>See Claude's response</summary>
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
		border-radius: 10px;
		margin: 2rem 0;
	}
	details {
		padding: 1rem;
		max-height: 300px;
		overflow: scroll;
	}
	summary {
		margin-bottom: 0.5rem;
	}
	summary:hover {
		cursor: pointer;
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
	pre {
		font-size: 0.8rem;
		background: var(--color-gray-100);
		border: 1px solid var(--color-gray-300);
		border-radius: 4px;
		padding: 1rem;
		overflow-x: scroll;
	}
</style>
