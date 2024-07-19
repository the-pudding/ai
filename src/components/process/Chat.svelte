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
	import code6a from "$data/code/6a.txt?raw";
	import code7a from "$data/code/7a.txt?raw";

	export let prompt;
	export let response;
	export let promptSummary;
	export let responseSummary;

	let promptOpen;
	let responseOpen;

	const codes = {
		code1a,
		code1b,
		code1c,
		code2a,
		code3a,
		code3b,
		code4a,
		code5a,
		code6a,
		code7a
	};
</script>

<div class="chat">
	{#if prompt && response}
		<details class="prompt" bind:open={promptOpen}>
			<summary
				><p>
					<span class="arrow">{promptOpen ? "▼" : "▶"}</span>
					<img src="assets/pudding-black.png" alt="pudding logo" /><span
						>{promptSummary}</span
					>
				</p></summary
			>
			<div class="inner">
				{#each prompt as { type, value }}
					<div>{@html snarkdown(value)}</div>
				{/each}
			</div>
		</details>

		<details class="response" bind:open={responseOpen}>
			<summary
				><p>
					<span class="arrow">{responseOpen ? "▼" : "▶"}</span>
					<img src="assets/claude.png" alt="claude logo" /><span
						>{responseSummary}</span
					>
				</p></summary
			>
			<div class="inner">
				{#each response as { type, value }}
					{#if type === "text"}
						<div>{@html snarkdown(value)}</div>
					{:else if type === "code"}
						<pre><code>{codes[`code${value}`]}</code></pre>
					{/if}
				{/each}
			</div>
		</details>
		<!-- {:else}
		<div>{summary}</div> -->
	{/if}
</div>

<style>
	.chat {
		font-family: var(--font-mono);
		line-height: 1.2;
		margin: 32px 0;
	}

	.inner {
		padding: 16px;
		max-height: 300px;
		overflow: auto;
	}

	details {
		padding: 16px;
	}

	details.prompt {
		background: var(--color-ai-green);
	}

	details.response {
		background: var(--color-ai-orange);
	}

	summary {
		display: flex;
		align-items: center;
		cursor: pointer;
		padding: 8px 0;
	}

	summary p {
		display: inline-flex;
		align-items: center;
		margin: 0;
	}

	summary img {
		width: 48px;
		height: auto;
		margin-right: 16px;
		background: var(--color-white);
		border-radius: 50%;
		padding: 8px;
		display: inline-block;
	}

	summary .arrow {
		margin-right: 16px;
	}

	pre {
		background: var(--color-ai-orange-og);
		padding: 16rem;
		overflow-x: scroll;
		font-size: var(--14px);
	}
</style>
