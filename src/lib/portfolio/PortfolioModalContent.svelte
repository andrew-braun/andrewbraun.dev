<script>
	import Button from "../ui/Button.svelte";
	export let name;
	export let featuredImageUrl;
	export let link;
	export let tags;
	export let excerpt;
</script>

<div class="portfolio-modal-content-container">
	<div class="portfolio-modal-column column-1">
		<div class="portfolio-modal-image-wrapper">
			<img
				src="https://cms.andrewbraun.dev{featuredImageUrl.large.url}"
				class="portfolio-modal-image"
				alt="Screenshot of {name}"
			/>
		</div>
		<div class="portfolio-modal-tag-container">
			<div class="portfolio-modal-tags">
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
			</div>
		</div>
	</div>
	<div class="portfolio-modal-column column-2">
		<h2 class="portfolio-modal-name">{name}</h2>
		<p class="portfolio-modal-description">{excerpt}</p>
	</div>
</div>

<!-- <Button {link}>Visit Site</Button> -->
<style>
	.portfolio-modal-content-container {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 100%;
		height: 100%;
	}
	.portfolio-modal-column {
		position: relative;
	}
	.column-1 {
		grid-column: 1;
	}
	.column-2 {
		grid-column: 2;
	}
	.portfolio-modal-image-wrapper {
		position: relative;
		width: 100%;
	}
	.portfolio-modal-image {
		width: 100%;
	}
</style>
