<script>
	import Footer from "$components/process/Footer.svelte";
	import Tap from "$components/helpers/Tap.svelte";
	import Product from "$components/product/Index.Product.svelte";
	import Process from "$components/process/Index.Process.svelte";
	import { side } from "$stores/misc.js";

	const onTap = (e) => {
		$side = e.detail;
	};
</script>

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

<Tap
	full={true}
	size={$side === "left" ? ["90vw", "10vw"] : ["10vw", "90vw"]}
	enableKeyboard={true}
	marginTop={0}
	on:tap={onTap}
/>

<style>
	.outer {
		overflow: hidden;
	}
	.inner {
		display: flex;
		width: 180vw;
		transition: transform calc(var(--1s) * 0.5);
	}
</style>
