<script>
	import { fade } from "svelte/transition";
	import Button from "../ui/Button.svelte";
	import Modal from "../ui/Modal.svelte";
	import { createEventDispatcher, afterUpdate } from "svelte";

	import PortfolioModalContent from "../portfolio/PortfolioModalContent.svelte";
	import Tag from "./Tag.svelte";
	import "../../style/animations.css";

	export let name;
	export let slug;
	export let featuredImageUrl;
	export let link;
	export let repo;
	export let tags;
	export let description;
	export let listPosition;

	const dispatch = createEventDispatcher();

	function fireCreatedEvent() {
		dispatch("created", {
			name,
			listPosition,
			slug
		});
	}

	afterUpdate(() => {
		fireCreatedEvent();
	});

	function truncateString(string, maxLength) {
		// get the index of space after maxLength
		const index = string.indexOf(" ", maxLength);
		return index === -1 ? string : `${string.substring(0, index)}...`;
	}
	const excerpt = truncateString(description, 160);

	let isModalActive = false;

	const toggleModal = (event) => {
		event.preventDefault();
		isModalActive = !isModalActive;
	};
	const imgSrc = featuredImageUrl.small.url.includes("cloudinary")
		? `https://res.cloudinary.com/andrewbraun-dev/image/upload/f_auto,q_auto:best/v1642848312/${featuredImageUrl.small.provider_metadata.public_id}`
		: `https://cms.andrewbraun.dev${featuredImageUrl.small.url}`;
</script>

<article
	class="portfolio-card"
	id={slug}
	data-list-position={listPosition}
	transition:fade={{ delay: listPosition * 150 - 600, y: 400, duration: 1500 }}
>
	<div class="portfolio-card-image-wrapper" on:click={toggleModal}>
		<img
			src={imgSrc}
			class="portfolio-card-image"
			alt="Screenshot of {name}"
			width="100%"
			height="100%"
		/>
		<div class="portfolio-card-overlay"><p>{excerpt}</p></div>
	</div>
	<h3 class="portfolio-card-name" on:click={toggleModal}>{name}</h3>
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
				<Button classNames="tags-read-more open-modal" onClick={toggleModal}>...and more</Button>
			{/if}
		</div>
	</div>

	<Button {link} prefetch={false}>Visit Site</Button>

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
		justify-content: space-between;
		position: relative;
		max-width: 250px;
		border-radius: 5px;
		text-align: center;
		margin: 1rem;
		background: linear-gradient(180deg, var(--color-3-trans), 60%, transparent);
		transition: all 0.3s ease-in-out;
		box-shadow: 1px 1px 2px 1px var(--color-3-trans);
	}

	.portfolio-card-image-wrapper {
		position: relative;
		max-width: 100%;
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
		background: hsla(0, 0%, 0%, 0.85);
		transform: translateY(-200px);
	}
	.portfolio-card-overlay p {
		margin: 0rem;
		padding: 0.8rem;
		text-align: left;
		font-size: 0.9rem;
	}
	.portfolio-card-image-wrapper:hover .portfolio-card-overlay {
		animation: slideDown 0.4s forwards, fadeIn 0.6s forwards;
		display: block;
	}
	.portfolio-card-image {
		width: 100%;
		height: 140px;
		border-radius: 5px 5px 0 0;
	}

	.portfolio-card-name {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 4rem;
		padding: 0 0.5rem;
		color: var(--dark-background-text);
		font-weight: bold;
		font-size: 1.5rem;
	}
	.portfolio-card-name:hover {
		cursor: pointer;
	}

	.portfolio-card-name:hover {
		text-decoration: none;
		border-bottom: none;
		border-color: none;
	}
	.portfolio-card-tag-container {
		min-height: 11rem;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		padding: 1% 0;
	}
	.portfolio-card-tags {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		padding: 0 3%;
	}

	@media screen and (max-width: 480px) {
		.portfolio-card {
			max-width: 90%;
		}
		.portfolio-card-image {
			height: auto;
		}
		.portfolio-card-name {
			min-height: 2rem;
		}
		.portfolio-card-tag-container {
			min-height: 9rem;
		}
		.portfolio-card-overlay p {
			font-size: 0.8rem;
		}
	}
</style>
