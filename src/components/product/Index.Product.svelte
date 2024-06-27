<script>
	import Header from "$components/product/Header.svelte";
	import Introduction from "$components/product/Introduction.svelte";
	import NegativeSongsChart from "$components/product/NegativeSongsChart.svelte";
	import EmotionChart from "$components/product/EmotionChart.svelte";
	import ArtistScatterplot from "$components/product/ArtistScatterplot.svelte";
	import ArtistRadarChart from "$components/product/ArtistRadarChart.svelte";
	import Conclusion from "$components/product/Conclusion.svelte";
	import Methodology from "$components/product/Methodology.svelte";
	import Footer from "$components/product/Footer.svelte";
	import { side } from "$stores/misc.js";
</script>

<div id="product" class:visible={$side === "right"}>
	<article>
		<Header />

		<Introduction />

		<section>
			<h2>The Rise of Negativity</h2>
			<NegativeSongsChart />
			<p>
				Our analysis reveals a clear upward trend in the percentage of songs
				with a predominantly negative emotional sentiment, particularly since
				the mid-2010s. In 2020, for the first time in the history of our
				dataset, negative songs outnumbered positive ones in the year-end top
				10.
			</p>

			<p>
				This rise in negativity is not attributable to any single emotion, but
				rather a confluence of increases in sadness, fear, disgust, and anger.
				Joy, while still the most common individual emotion, has been on a
				relative decline.
			</p>

			<EmotionChart />
			<p>
				Interestingly, this shift coincides with the rise of Hip hop/Rap as the
				dominant genre in popular music, overtaking the more traditionally
				upbeat Pop. Hip hop songs, on average, tend to have a much higher
				proportion of negative emotions compared to other genres.
			</p>
			<p>
				But this is not to say that negativity is confined to Hip hop. Across
				the board, from Pop to Rock to R&B, songs with darker themes have been
				on the ascent. It seems to be a cross-genre zeitgeist, a pervasive mood
				in the music of our times.
			</p>
		</section>

		<section>
			<h2>The Artist Landscape</h2>
			<p>
				Of course, behind every song is an artist, and each artist has their own
				distinctive emotional style or "fingerprint." Some, like Billie Eilish
				or Juice WRLD, are known for their consistently dark and moody lyrics,
				while others, like Ariana Grande or BTS, tend towards a more positive,
				uplifting tone.
			</p>
			<ArtistScatterplot />
			<p>
				Explore the scatterplot above to see where your favorite artists fall on
				the spectrum of musical emotion. You can search for specific artists,
				filter by genre and decade, and dive into any artist's full emotional
				profile.
			</p>
			<ArtistRadarChart />
			<p>
				What's fascinating is how an artist's emotional fingerprint can evolve
				over their career, often reflecting their personal growth and struggles.
				Taylor Swift, for example, started out with mostly positive, lovestruck
				anthems, but has increasingly explored darker, more introspective themes
				in her recent work.
			</p>
		</section>

		<section>
			<h2>Conclusion</h2>
			<Conclusion />
		</section>

		<section>
			<h2>Methodology</h2>
			<Methodology />
		</section>

		<Footer />
	</article>
</div>

<style>
	#product {
		width: 90vw;
		background: var(--background-color);
		opacity: 0.2;
		transition: opacity calc(var(--1s) * 0.4);
	}
	#product.visible {
		opacity: 1;
	}
	:global(#product) {
		--background-color: #1d1f21;
		--text-color: #e6e6e6;
		--heading-color: #ffffff;
		--accent-color: #61afef;
		--chart-color-1: #e06c75;
		--chart-color-2: #98c379;
		--chart-color-3: #e5c07b;
		--chart-color-4: #56b6c2;
		--chart-color-5: #c678dd;
		--chart-color-6: #61afef;
		--chart-color-7: #c49c94;
		--chart-color-8: #f19c99;
	}
	:global(#product p) {
		margin-bottom: 1.5rem;
	}
	:global(#product a) {
		color: var(--accent-color);
		text-decoration: none;
	}
	:global(#product a:hover) {
		text-decoration: underline;
	}
	:global(#product blockquote) {
		font-family: var(--font-serif);
		font-style: italic;
		border-left: 4px solid var(--accent-color);
		padding-left: 1rem;
		margin: 1.5rem 0;
	}
	:global(#product svg text) {
		fill: white;
	}

	article {
		background-color: var(--background-color);
		color: var(--text-color);
		font-family: var(--font-serif);
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
	}
	section {
		margin-bottom: 40px;
	}
	h2 {
		color: var(--heading-color);
		font-family: var(--font-sans);
		font-weight: bold;
		font-size: 24px;
		margin-top: 2rem;
		margin-bottom: 20px;
		border-bottom: 2px solid var(--accent-color);
		padding-bottom: 0.5rem;
	}

	@media screen and (max-width: 600px) {
		:global(#product h2) {
			font-size: 1.5rem;
		}
	}
</style>
