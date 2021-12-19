<script>
	import { afterUpdate, beforeUpdate, onMount, tick } from "svelte";
	import ProjectCard from "./ProjectCard.svelte";
	import Button from "../ui/Button.svelte";
	export let projects;
	const sortedProjects = projects.sort(
		(projectA, projectB) => projectA.order_priority > projectB.order_priority
	);

	let projectList;

	let projectsToDisplay = 5;
	let lastProjectPosition = projectsToDisplay;
	let lastProjectId;
	let lastProject;

	const handleCardCreation = (event) => {
		console.log(event.detail);
		lastProjectPosition = event.detail.listPosition;
		// lastProjectId = event.detail.slug;
		console.log(`lastProjectPosition: ${lastProjectPosition}`);
		console.log(`lastProjectId: ${lastProjectId}`);
		// console.log(`CurrentDisplay: ${projectsToDisplay}`);
		// console.log(`listPositions: ${event.detail.listPosition}`);
	};

	const handleShowMore = async () => {
		if (projectsToDisplay + 6 <= projects.length) {
			projectsToDisplay += 6;
		}
	};

	beforeUpdate(() => {
		lastProjectPosition += 1;
	});
	afterUpdate(() => {
		lastProject = document.querySelector(`[data-list-position='${lastProjectPosition}']`);
		console.log(lastProject);
		setTimeout(() => {
			lastProject.scrollIntoView({ behavior: "smooth", block: "start" });
		}, 100);
	});
</script>

<div class="portfolio-container" bind:this={projectList}>
	<div class="project-list">
		{#if projects}
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
		<div class="show-more-button-wrapper">
			<Button width="20rem" onClick={handleShowMore}>Show More</Button>
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
	.show-more-button-wrapper {
		display: flex;
		justify-content: center;
	}
</style>
