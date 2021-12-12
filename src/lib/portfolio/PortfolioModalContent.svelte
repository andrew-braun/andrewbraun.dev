<script>
	import Button from "../ui/Button.svelte";
	import Tag from "./Tag.svelte";

	export let name;
	export let featuredImageUrl;
	export let link;
	export let repo;
	export let tags;
	export let excerpt;
	export let description;
</script>

<div class="portfolio-modal-content-container">
	{#if repo}
		<a href={repo} class="github-corner" aria-label="View source on GitHub"
			><svg
				width="80"
				height="80"
				viewBox="0 0 250 250"
				style="fill:#fff; color:#151513; position: absolute; top: 0; border: 0; left: 0; transform: scale(-1, 1);"
				aria-hidden="true"
				><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" /><path
					d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
					fill="currentColor"
					style="transform-origin: 130px 106px;"
					class="octo-arm"
				/><path
					d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
					fill="currentColor"
					class="octo-body"
				/></svg
			></a
		>
	{/if}
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

	.github-corner {
		z-index: 100;
	}
	.github-corner:hover .octo-arm {
		animation: octocat-wave 560ms ease-in-out;
	}
	@keyframes octocat-wave {
		0%,
		100% {
			transform: rotate(0);
		}
		20%,
		60% {
			transform: rotate(-25deg);
		}
		40%,
		80% {
			transform: rotate(10deg);
		}
	}
	@media (max-width: 500px) {
		.github-corner:hover .octo-arm {
			animation: none;
		}
		.github-corner .octo-arm {
			animation: octocat-wave 560ms ease-in-out;
		}
	}
</style>
