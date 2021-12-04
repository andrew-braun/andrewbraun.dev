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
	</a>
	<div class="portfolio-card-tag-container">
		<div class="portfolio-card-tags">
			{#if tags}
				{#each tags as tag}
					<a
						href="/tags/{tag.slug.toLowerCase()}"
						class="portfolio-card-tag"
						sveltekit:noscroll
						sveltekit:prefetch>{tag.tagname}</a
					>
				{/each}
			{/if}
			{#if tags && tags.length >= 8}
				<Button className="tags-read-more open-modal" fontSize="0.85rem">...and more</Button>
			{/if}
		</div>
	</div>
	<Button {link}>Visit Site</Button>
</article>

<style>
	.portfolio-card {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		position: relative;
		max-width: 250px;
		min-height: 200px;
		border-radius: 5px;
		text-align: center;
		margin: 1rem;
		background: linear-gradient(180deg, var(--color-2) 40%, transparent);

		/* transition: all 0.3s ease-in-out; */
	}

	.portfolio-card-image-wrapper {
		max-width: 250px;
	}
	.portfolio-card-image {
		width: 100%;
		height: 150px;
		border-radius: 5px 5px 0 0;
	}
	.portfolio-card-name {
		color: var(--dark-background-text);
		font-weight: bold;
		font-size: 1.3rem;
	}
	.portfolio-card-link,
	.portfolio-card-name:hover {
		text-decoration: none;
		border-bottom: none;
		border-color: none;
	}
	.portfolio-card-tag-container {
		min-height: 11rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.portfolio-card-tags {
		display: flex;
		flex-wrap: wrap;
		align-items: center;

		padding: 3%;
	}
	.portfolio-card-tag {
		flex: 0 1 auto;
		display: flex;
		align-items: center;
		height: 2rem;
		padding: 0.3rem;
		margin: 0.2rem;
		border-radius: 5px;
		background: var(--dark-background-1);
		font-size: 0.75rem;
		color: var(--dark-background-text);
		transition-duration: var(--transition-duration-very-long);
		transition-timing-function: ease-in-out;
	}
	.portfolio-card-tag:hover {
		box-shadow: inset 8rem 0 0 0 var(--color-3);
	}
</style>
