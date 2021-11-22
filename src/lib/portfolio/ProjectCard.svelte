<script>
	export let name;
	export let featuredImageUrl;
	export let link;
	export let tags;
</script>

<article class="portfolio-card">
	<a href={link} class="portfolio-card-link">
		<div class="portfolio-card-image-wrapper">
			<img
				src="https://cms.andrewbraun.dev{featuredImageUrl}"
				class="portfolio-card-image"
				alt="Screenshot of {name}"
			/>
		</div>
		<span class="portfolio-card-name">{name}</span>
	</a>
	<div class="portfolio-card-tag-container">
		{#if tags}
			{#each tags as tag}
				<a sveltekit:prefetch href="/tags/{tag.slug.toLowerCase()}" class="portfolio-card-tag"
					>{tag.tagname}</a
				>
			{/each}
		{/if}
	</div>
</article>

<style>
	.portfolio-card {
		position: relative;
		max-width: 280px;
		border: 1px solid var(--dark-text-1);
		border-radius: 5px;
		text-align: center;
	}
	.portfolio-card-image-wrapper {
		max-width: 280px;
	}
	.portfolio-card-image {
		width: 100%;
		border-radius: 5px;
	}
	.portfolio-card-tag-container {
		display: flex;
		flex-wrap: wrap;
		padding: 3%;
	}
	.portfolio-card-tag {
		padding: 0.2rem;
		margin: 0.2rem;
		border-radius: 5px;
		background: var(--color-1);
		font-size: 0.8rem;
		color: var(--color-5);
	}
</style>
