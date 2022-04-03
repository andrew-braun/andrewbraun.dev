<script>
	import { afterUpdate, beforeUpdate } from "svelte";
	import ProjectCard from "./ProjectCard.svelte";
	import Button from "../ui/Button.svelte";
	export let projects;

	$: sortedProjects = Array.isArray(projects) ? projects : [];

	// const sortedProjects = projects
	// 	? projects.sort((projectA, projectB) => projectA.order_priority > projectB.order_priority)
	// 	: "";

	// Get list of project objects as props
	let projectList;

	// Display 6 projects initially (0 index)
	let projectsToDisplay = 5;

	// Track the currently rendered project cards
	let renderedProjectCards = [];

	let lastRenderedProjectPosition;

	// Listen for custom component event on card creation, push to list
	const handleCardCreation = (event) => {
		renderedProjectCards.push(event.detail);
	};

	// Display up to 6 more projects on Show More click
	const handleShowMore = async () => {
		if (projectsToDisplay + 6 <= projects.length) {
			projectsToDisplay += 6;
		}
	};

	beforeUpdate(() => {
		if (renderedProjectCards.length) {
			lastRenderedProjectPosition =
				renderedProjectCards[renderedProjectCards.length - 1].listPosition;
		}
	});
	afterUpdate(() => {
		const scrollToNextProject = () => {
			if (!lastRenderedProjectPosition) {
				return;
			}

			setTimeout(() => {
				const scrollToProject = document.querySelector(
					`[data-list-position='${lastRenderedProjectPosition + 1}']`
				);

				scrollToProject
					? scrollToProject.scrollIntoView({ behavior: "smooth", block: "center" })
					: "";
			}, 10);
		};
		scrollToNextProject();
	});
</script>

<div class="portfolio-container" bind:this={projectList}>
	<div class="project-list">
		{#if sortedProjects}
			{#each sortedProjects as project, index}
				{#if index <= projectsToDisplay}
					<ProjectCard
						listPosition={index}
						slug={project.slug}
						name={project.name}
						featuredImageUrl={project.featured_image.formats}
						link={project.link}
						repo={project.repo}
						tags={project.tags}
						description={project.description}
						on:created={handleCardCreation}
					/>
				{/if}
			{/each}
		{/if}
	</div>
	{#if projects.length > 6 && projectsToDisplay < projects.length}
		<div class="show-more-button-container">
			<div class="show-more-button-wrapper">
				<Button onClick={handleShowMore}>Show More</Button>
			</div>
		</div>
	{/if}
</div>

<style>
	.portfolio-container {
		display: flex;
		flex-direction: column;
	}
	.project-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.show-more-button-container {
		display: flex;
		justify-content: center;
		width: 100%;
	}
	.show-more-button-wrapper {
		min-width: 20rem;
		max-width: 30rem;
	}
</style>
