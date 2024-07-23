<script>
	import Footer from "$components/process/Footer.svelte";
	import Product from "$components/product/Index.Product.svelte";
	import Process from "$components/process/Index.Process.svelte";
	import { side, scrollY, prev, productHeight } from "$stores/misc.js";
	import { onMount, tick } from "svelte";

	const onSwitch = async ({ detail }, goTo) => {
		const sideLeaving = detail === "left" ? "right" : "left";
		$prev[sideLeaving] = $scrollY;

		if (goTo) window.scroll(0, goTo);
		else window.scrollTo(0, $prev[detail]);

		// prevent $side from updating before $scrollY (so onScroll logic isn't triggeree)
		await tick();

		setTimeout(() => {
			$side = detail;
		}, 50);
	};

	const onKeyDown = (e) => {
		const dir = e.key.replace("Arrow", "").toLowerCase();
		if (dir === "left" || dir === "right") {
			onSwitch({ detail: dir });
		}
	};

	const onScroll = () => {
		// prevent from going past $productHeight
		if ($side === "right") {
			if ($scrollY > $productHeight) {
				window.scrollTo(0, $productHeight);
			}
		}
	};

	onMount(() => {
		const spans = document.querySelectorAll("span.show");
		spans.forEach((span) => {
			span.addEventListener("click", () => {
				const id = span.getAttribute("data-id");
				const el = document.getElementById(id);
				const goTo =
					el.offsetTop - window.innerHeight / 2 + el.offsetHeight / 2;

				el.classList.add("highlighted");
				setTimeout(() => {
					el.classList.remove("highlighted");
				}, 4000);

				onSwitch({ detail: "right" }, goTo);
			});
		});
	});
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

	:global(span.show) {
		white-space: nowrap;
	}
	:global(.highlighted) {
		border-bottom: 3px solid var(--color-ai-orange-og);
		color: white;
		width: fit-content;
	}
</style>
