<script>
	import { currentVideoId, currentVideoY } from "$stores/misc.js";

	let videoEl;

	$: if (videoEl && $currentVideoId === "test") {
		videoEl.play();
	} else if (videoEl) {
		videoEl.pause();
	}
</script>

<div class:visible={$currentVideoId === "test"}>
	<video bind:this={videoEl} src="assets/video/test.mp4" controls={true} />
</div>

<style>
	div {
		position: absolute;
		top: 1600px;
		width: 200px;
		opacity: 0.4;
	}
	div.visible {
		opacity: 1;
	}
	video {
		padding: 0 0.5rem;
		width: 100%;
	}
</style>
