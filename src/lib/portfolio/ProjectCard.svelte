<script>
	import Button from "../ui/Button.svelte";

	export let name;
	export let featuredImageUrl;
	export let link;
	export let tags;
	export let excerpt;
</script>

<article class="portfolio-card">
	<a href={link} class="portfolio-card-link" sveltekit:prefetch>
		<div class="portfolio-card-image-wrapper">
			<img
				src="https://cms.andrewbraun.dev{featuredImageUrl}"
				class="portfolio-card-image"
				alt="Screenshot of {name}"
			/>
		</div>
		<span class="portfolio-card-name">{name}</span>
		<!-- <p class="portfolio-card-excerpt">{excerpt}</p> -->
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
		border-radius: 5px;
		text-align: center;
		background: linear-gradient(180deg, var(--color-2) 40%, transparent);
	}
	.portfolio-card-image-wrapper {
		max-width: 280px;
	}
	.portfolio-card-image {
		width: 100%;
		border-radius: 5px 5px 0 0;
	}
	.portfolio-card-name {
		color: var(--color-5);
		font-weight: bold;
		font-size: 1.3rem;
	}
	.portfolio-card-link,
	.portfolio-card-name:hover {
		text-decoration: none;
		border-bottom: none;
		border-color: none;
	}
	.portfolio-card-excerpt {
		margin: 0;
		padding: 0.3rem 1rem;
		text-align: left;
		font-size: 0.8rem;
	}
	.portfolio-card-tag-container {
		display: flex;
		flex-wrap: wrap;
		padding: 3%;
	}
	.portfolio-card-tag {
		padding: 0.3rem;
		margin: 0.2rem;
		border-radius: 5px;
		background: var(--dark-background-1);
		font-size: 0.85rem;
		color: var(--dark-background-text);
		transition-duration: var(--transition-duration-very-long);
		transition-timing-function: ease-in-out;
	}
	.portfolio-card-tag:hover {
		box-shadow: inset 8rem 0 0 0 var(--color-3);
	}
</style>
