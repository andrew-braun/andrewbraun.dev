<script>
	import { onMount, tick } from "svelte";
	import ProjectCard from "./ProjectCard.svelte";
	import Button from "../ui/Button.svelte";
	export let projects;
	const sortedProjects = projects.sort(
		(projectA, projectB) => projectA.order_priority > projectB.order_priority
	);

	let projectList;

	let projectsToDisplay = 5;
	const handleShowMore = async () => {
		if (projectsToDisplay + 6 <= projects.length) {
			projectsToDisplay += 6;
		}
		setTimeout(() => {
			window.scrollBy(0, 800);
		}, 400);
	};
</script>

<div class="portfolio-container" bind:this={projectList}>
	<div class="project-list">
		{#if projects}
			{#each sortedProjects as project, index}
				{#if index <= projectsToDisplay}
					<ProjectCard
						listPosition={index}
						name={project.name}
						featuredImageUrl={project.featured_image.formats}
						link={project.link}
						repo={project.repo}
						tags={project.tags}
						description={project.description}
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
