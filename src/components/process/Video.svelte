<script>
	import { currentVideoId, currentVideoY } from "$stores/misc.js";
</script>

<div
	class:visible={$currentVideoId !== undefined}
	style:top={`${$currentVideoY || 0}px`}
>
	<video src="assets/video/test.mp4" controls={true}> </video>
</div>

<style>
	div {
		position: absolute;
		transform: translate(calc(-100%), 0);
		height: 150px;
		width: 250px;
		visibility: hidden;
	}
	div.visible {
		visibility: visible;
	}
	video {
		padding: 0 0.5rem;
	}
</style>
