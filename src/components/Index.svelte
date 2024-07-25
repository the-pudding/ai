<script>
	import Footer from "$components/process/Footer.svelte";
	import Product from "$components/product/Index.Product.svelte";
	import Process from "$components/process/Index.Process.svelte";
	import { side } from "$stores/misc.js";
	import { onMount } from "svelte";
	import viewport from "$stores/viewport.js";

	const onSwitch = async ({ detail }, goTo) => {
		if (goTo) {
			goTo.scrollIntoView({ behavior: "smooth", block: "center" });
		}
		$side = detail;
	};

	const onKeyDown = (e) => {
		const dir = e.key.replace("Arrow", "").toLowerCase();
		if (dir === "left" || dir === "right") {
			onSwitch({ detail: dir });
		}
	};

	onMount(() => {
		const showButtons = document.querySelectorAll("button.show");
		showButtons.forEach((btn) => {
			btn.addEventListener("click", () => {
				const id = btn.getAttribute("data-id");
				const goTo = document.getElementById(id);
				onSwitch({ detail: "right" }, goTo);
			});
		});
	});
</script>

<svelte:window on:keydown={onKeyDown} />
<div class="outer">
	<div
		class="inner"
		style:transform={`translate(${$side === "right" ? "-80vw" : 0}, 0)`}
	>
		<div class="switcher">
			<button
				class={$side}
				on:click={() =>
					onSwitch({ detail: $side === "left" ? "right" : "left" })}
			>
				{#if $viewport.width < 600}
					{#if $side === "left"}
						<img class="logo" src="assets/claude.png" alt="claude logo" />
						<span class="arrow">&rarr;</span>
					{:else}
						<span class="arrow">&larr;</span>
						<img
							class="logo"
							src="assets/pudding-black.png"
							alt="pudding logo"
						/>
					{/if}
				{:else}
					{@html $side === "left"
						? "Read Claude’s story &rarr;"
						: "&larr; See the process"}
				{/if}
			</button>
		</div>

		<div class="side" class:visible={$side === "left"}>
			<Process on:switch={onSwitch} />
			<Footer></Footer>
		</div>
		<div class="side" class:visible={$side === "right"}>
			<Product on:switch={onSwitch} />
		</div>
	</div>
</div>

<style>
	.outer {
		overflow-x: hidden;
	}

	.inner {
		display: flex;
		height: 100vh;
		transition: transform calc(var(--1s) * 0.5) ease-in-out;
	}

	.side {
		width: 90vw;
		overflow-y: scroll;
		flex-shrink: 0;
	}

	.switcher {
		position: fixed;
		top: 50%;
		left: 90vw;
		z-index: 1000;
		transform: translate(-50%, -50%);
	}

	.switcher button {
		font-size: var(--18px);
		padding: 16px;
		background: var(--color-claude-bg);
		color: var(--color-bg);
		pointer-events: auto;
		white-space: nowrap;
		transition: background calc(var(--1s) * 0.3);
	}

	.switcher button.right {
		background: var(--color-bg);
		color: var(--color-fg);
	}

	@media (max-width: 600px) {
		.switcher {
			left: auto;
			right: 10vw;
			transform: translate(50%, -50%);
		}
		.switcher button {
			padding: 8px;
			height: 4rem;
			display: flex;
			align-items: center;
		}
		.switcher img {
			height: 100%;
		}
		.arrow {
			margin: 0 6px;
		}
	}
</style>
