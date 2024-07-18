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
			<summary
				><p>
					<span class="arrow">▶</span>
					<img src="assets/pudding-black.png" alt="pudding logo" /><span
						>{summary}</span
					>
				</p></summary
			>
			{#each prompt as { type, value }}
				<div>{@html snarkdown(value)}</div>
			{/each}
		</details>

		<details class="response" open={!!expandResponse}>
			<summary
				><p>
					<span class="arrow">▶</span>
					<img src="assets/claude.png" alt="claude logo" /><span
						>See Claude's response</span
					>
				</p></summary
			>
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
		display: flex;
		align-items: center;

		cursor: pointer;
	}
	summary p {
		display: inline-flex;
		align-items: center;
		margin: 0;
	}

	summary img {
		width: 48px;
		height: auto;
		margin-right: 8px;
		background: var(--color-white);
		border-radius: 50%;
		padding: 8px;
		display: inline-block;
	}

	summary .arrow {
		margin-right: 8px;
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
