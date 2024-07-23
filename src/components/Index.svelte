<script>
	import Footer from "$components/process/Footer.svelte";
	import Product from "$components/product/Index.Product.svelte";
	import Process from "$components/process/Index.Process.svelte";
	import { side, scrollY, prev, productHeight } from "$stores/misc.js";

	function onSwitch({ detail }) {
		const p = $prev[detail];
		window.scrollTo(0, p);
		$side = detail;
	}

	function onKeyDown(e) {
		const dir = e.key.replace("Arrow", "").toLowerCase();
		if (dir === "left" || dir === "right") {
			onSwitch({ detail: dir });
		}
	}

	function onScroll() {
		// prevent from going past $productHeight
		if ($side === "right") {
			if ($scrollY > $productHeight) {
				window.scrollTo(0, $productHeight);
			}
		}
	}
</script>

<svelte:window
	on:keydown={onKeyDown}
	bind:scrollY={$scrollY}
	on:scroll={onScroll}
/>
<div class="outer">
	<div
		class="inner"
		style:transform={`translate(${$side === "left" ? 0 : -80}vw, 0)`}
	>
		<Process on:switch={onSwitch} />
		<Product on:switch={onSwitch} />
	</div>
</div>

<Footer></Footer>

<style>
	.outer {
		overflow-x: clip;
	}

	.inner {
		display: flex;
		width: 180vw;
		transition: transform calc(var(--1s) * 0.5);
	}
</style>
