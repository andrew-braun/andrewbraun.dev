<script>
	import Button from "../ui/Button.svelte";
	import Modal from "../ui/Modal.svelte";
	import PortfolioModalContent from "../portfolio/PortfolioModalContent.svelte";
	import Tag from "./Tag.svelte";
	import "../../animations.css";

	export let name;
	export let featuredImageUrl;
	export let link;
	export let repo;
	export let tags;
	export let description;

	function truncateString(string, maxLength) {
		// get the index of space after maxLength
		const index = string.indexOf(" ", maxLength);
		return index === -1 ? string : `${string.substring(0, index)}...`;
	}
	const excerpt = truncateString(description, 180);

	let isModalActive = false;

	const toggleModal = (event) => {
		event.preventDefault();
		isModalActive = !isModalActive;
	};
</script>

<article class="portfolio-card">
	<div class="portfolio-card-image-wrapper" on:click={toggleModal}>
		<img
			src="https://cms.andrewbraun.dev{featuredImageUrl.small.url}"
			class="portfolio-card-image"
			alt="Screenshot of {name}"
		/>
		<div class="portfolio-card-overlay"><p>{excerpt}</p></div>
	</div>
	<h3 class="portfolio-card-name">{name}</h3>
	<div class="portfolio-card-tag-container">
		<div class="portfolio-card-tags">
			{#if tags}
				{#each tags as tag, index}
					{#if index <= 8}
						<Tag tagname={tag.tagname} slug={tag.slug} />
					{/if}
				{/each}
			{/if}
			{#if tags && tags.length >= 8}
				<Button className="tags-read-more open-modal" onClick={toggleModal} fontSize="0.85rem"
					>...and more</Button
				>
			{/if}
		</div>
	</div>
	<Button {link}>Visit Site</Button>
	<Modal bind:isOpen={isModalActive}
		><span slot="content"
			><PortfolioModalContent
				{name}
				{link}
				{repo}
				{tags}
				{excerpt}
				{featuredImageUrl}
				{description}
			/></span
		></Modal
	>
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
		position: relative;
		max-width: 250px;
		overflow: hidden;
	}
	.portfolio-card-image-wrapper:hover {
		cursor: pointer;
		animation: addGlow 0.8s forwards;
	}
	.portfolio-card-overlay {
		position: absolute;
		display: none;
		top: 0;
		right: 0;
		left: 0;
		opacity: 0;
		height: 96%;
		width: 100%;

		background: hsla(0, 0%, 0%, 0.7);
		transform: translateY(-200px);
	}
	.portfolio-card-overlay p {
		margin: 0rem;
		padding: 0.5rem;
		text-align: left;
		font-size: 0.9rem;
	}
	.portfolio-card-image-wrapper:hover .portfolio-card-overlay {
		animation: slideDown 0.4s forwards, fadeIn 0.6s forwards;
		display: block;
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
		padding-top: 0.5rem;
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

		padding: 0 3% 3% 3%;
	}
</style>
