<script>
	// shadow, plain, line, bubble
	import wordmark from "$svg/wordmark-shadow.svg";
</script>

<header>
	<div class="wordmark">
		<a href="https://pudding.cool" aria-label="The Pudding" target="_self"
			>{@html wordmark}</a
		>
	</div>
</header>

<style>
	.wordmark {
		max-width: 10em;
		margin: 0 auto;
		padding: 32px 0;
		transform: translate(-16px, 0) rotate(-3deg);
	}

	.wordmark a {
		border: none !important;
		display: block;
		color: var(--color-fg);
	}

	.wordmark a:hover {
		background-color: transparent;
	}

	.wordmark:hover {
		transform: translate(-15px, 0) rotate(0deg);
	}
</style>
