<script>
	import Chat from "$components/process/Chat.svelte";
	import { side } from "$stores/misc.js";
	import copy from "$data/copy.json";
</script>

<div id="process" class:visible={$side === "left"}>
	<div class="switcher">
		<button on:click={() => ($side = "right")}
			>Read Claude’s story &rarr;
		</button>
	</div>
	<article>
		<h1><strong>{copy.hed}</strong></h1>
		<div class="byline">{@html copy.byline}</div>

		{#each copy.process as { type, value }}
			{#if type === "text"}
				<p>{@html value}</p>
			{:else if type === "heading"}
				<h2 id={value.id}><strong>{@html value.text}</strong></h2>
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
			{:else if type === "preview"}
				<div class="preview">
					<h3>Our grade: <strong>{value.grade}</strong></h3>
					<span class="summary">{value.summary}</span>
				</div>
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
					<h3><strong>Reflection</strong></h3>
					{#each value as d}
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
					<figcaption><small>{value.caption}</small></figcaption>
				</figure>
			{:else if type === "editorNote"}
				<p class="note"><strong>Editor’s Note:</strong> {value}</p>
			{/if}
		{/each}
	</article>
</div>

<style>
	#process {
		width: 90vw;
		position: relative;
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

	.callout {
		background: var(--color-gray-100);
		padding: 16px;
		margin: 32px 0;
		cursor: pointer;
	}

	.callout p {
		margin: 0;
	}

	.callout:hover {
		background: var(--color-gray-300);
	}

	.reaction {
		margin-top: 32px;
		background: var(--color-gray-100);
		padding: 16px;
	}

	.reaction h3 {
		margin-top: 0;
	}

	.preview {
		background: var(--color-gray-100);
		padding: 16px;
	}

	.preview h3 {
		margin-top: 0;
	}

	figure {
		margin: 32px 0;
	}

	figure img,
	figure video {
		border: 2px solid var(--color-fg);
	}

	figcaption {
		color: var(--color-gray-600);
		margin-top: 6px;
		line-height: 1.2;
		font-size: var(--12px);
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

	.note {
		background: var(--color-gray-100);
		padding: 16px;
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
		pointer-events: auto;
	}

	.switcher button {
		font-size: var(--18px);
		padding: 16px;
		background: #1d1f21;
		color: var(--color-bg);
		transform: translateX(calc(10vw - 16px));
	}
</style>
