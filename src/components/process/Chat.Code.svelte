<script>
	import code1a from "$data/code/1a.txt?raw";
	import code1b from "$data/code/1b.txt?raw";
	import code1c from "$data/code/1c.txt?raw";
	import code2a from "$data/code/2a.txt?raw";
	import code3a from "$data/code/3a.txt?raw";
	import code3b from "$data/code/3b.txt?raw";
	import code4a from "$data/code/4a.txt?raw";
	import code5a from "$data/code/5a.txt?raw";
	import code6a from "$data/code/6a.txt?raw";
	import code7a from "$data/code/7a.txt?raw";

	export let id;

	const codes = {
		code1a,
		code1b,
		code1c,
		code2a,
		code3a,
		code3b,
		code4a,
		code5a,
		code6a,
		code7a
	};
</script>

<pre><code>{codes[`code${id}`]}</code></pre>

<style>
	pre {
		background: var(--color-ai-orange-og);
		padding: 16px;
		margin: 16px 0;
		overflow-x: scroll;
		font-size: var(--14px);
	}
</style>
