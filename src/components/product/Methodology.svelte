<p>
	Our analysis is based on the Billboard Hot 100 year-end top 10 songs from 1960
	to 2020. The lyrics for each song were sourced from the Genius API.
</p>

<p>
	To determine the emotional content of each song, we used the NRC Sentiment and
	Emotion Lexicons. These lexicons contain a list of English words and their
	associations with eight basic emotions (anger, fear, anticipation, trust,
	surprise, sadness, joy, and disgust) and two sentiments (negative and
	positive).
</p>

<p>
	Each song's lyrics were analyzed and assigned a score for each of the eight
	emotions based on the frequency and intensity of emotion-related words. The
	primary sentiment (positive or negative) was determined by which sentiment had
	the higher score.
</p>

<p>
	It's important to note that this is an automated analysis based on word
	associations, and may not always capture the full nuance and context of a
	song's emotional content. Sarcasm, for example, or complex storytelling may be
	misinterpreted. However, across a large dataset, it provides a robust overall
	picture of the patterns and trends in the emotional landscape of popular
	music.
</p>

<p id="show-gh-repo">
	You can explore the full datasets and code used in this analysis on our
	<a href="https://github.com/your-repo-here" target="_blank">Github repo</a>.
</p>
