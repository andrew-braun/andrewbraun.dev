<script>
	import Button from "../ui/Button.svelte";
	import Tag from "./Tag.svelte";
	export let name;
	export let featuredImageUrl;
	export let link;
	export let tags;
	export let excerpt;
	export let description;
</script>

<div class="portfolio-modal-content-container">
	<div class="portfolio-modal-column column-1">
		<div class="portfolio-modal-image-wrapper">
			<img
				src="https://cms.andrewbraun.dev{featuredImageUrl.large.url}"
				class="portfolio-modal-image"
				alt="Screenshot of {name}"
			/>
			<a href={link} class="portfolio-modal-image-overlay">
				<p>Visit Site</p>
			</a>
		</div>
		<div class="portfolio-modal-tag-container">
			<div class="portfolio-modal-tags">
				{#if tags}
					{#each tags as tag}
						<Tag
							tagname={tag.tagname}
							slug={tag.slug}
							backgroundColor="var(--color-2)"
							fontWeight="bold"
						/>
					{/each}
				{/if}
			</div>
		</div>
		<Button {link} width="80%">Visit Site</Button>
	</div>
	<div class="portfolio-modal-column column-2">
		<h2 class="portfolio-modal-name">{name}</h2>
		<p class="portfolio-modal-description">{description}</p>
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
		overflow: auto;
	}
	.portfolio-modal-column {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.column-1 {
		grid-column: 1;
	}
	.column-2 {
		grid-column: 2;
		padding: 4% 2% 4% 0%;
	}
	.portfolio-modal-image-wrapper {
		position: relative;
		width: 100%;
	}
	.portfolio-modal-image {
		width: 100%;
		transition: all 0.3s ease-in-out;
	}
	.portfolio-modal-image-overlay {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		background: var(--dark-background-1-trans);
		opacity: 0;
		transition: all 0.3s ease-in-out;
	}
	.portfolio-modal-image-overlay p {
		border: 1px solid white;
		border-radius: 10px;
		font-size: 1.8rem;
		padding: 0.8rem 1.5rem;
	}
	.portfolio-modal-image-wrapper:hover .portfolio-modal-image {
		filter: blur(5px);
	}
	.portfolio-modal-image-overlay:hover {
		opacity: 1;
	}

	.portfolio-modal-tag-container {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 3% 5%;
	}
	.portfolio-modal-tags {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		padding: 0 3% 3% 3%;
	}
	.portfolio-modal-description {
		padding: 2rem;
		text-align: left;
	}
	@media screen and (max-width: 768px) {
		.portfolio-modal-content-container {
			grid-template-columns: 1fr;
		}
		.column-1 {
			grid-column: 1;
		}
		.column-2 {
			grid-column: 1;
		}
	}
</style>
