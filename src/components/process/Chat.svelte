<script>
	import Code from "$components/process/Chat.Code.svelte";

	export let prompt;
	export let response;
	export let promptSummary;
	export let responseSummary;

	let promptOpen;
	let responseOpen;
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
				{#each prompt as { value }}
					<p class="text">{value}</p>
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
						<p class="text">{value}</p>
					{:else if type === "code"}
						<Code id={value} />
					{/if}
				{/each}
			</div>
		</details>
	{/if}
</div>

<style>
	.chat {
		font-family: var(--font-mono);
		line-height: 1.2;
		margin: 48px 0;
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

	.chat p.text {
		margin: 12px 0;
	}
	.chat p.text:first-child {
		margin-top: 0;
	}
	.chat p.text:last-child {
		margin-bottom: 0;
	}
</style>
