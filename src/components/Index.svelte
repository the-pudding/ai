<script>
	import Footer from "$components/process/Footer.svelte";
	import Product from "$components/product/Index.Product.svelte";
	import Process from "$components/process/Index.Process.svelte";
	import { side } from "$stores/misc.js";

	function onKeyDown(e) {
		const dir = e.key.replace("Arrow", "").toLowerCase();
		if (dir === "left" || dir === "right") {
			$side = dir;
			switchText = dir === "left" ? "Read Our Process" : "Read Claude's Story";
		}
	}
</script>

<svelte:window on:keydown={onKeyDown} />
<div class="outer">
	<div
		class="inner"
		style:transform={`translate(${$side === "left" ? 0 : -80}vw, 0)`}
	>
		<Process />
		<Product />
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
