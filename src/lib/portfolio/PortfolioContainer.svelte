<script>
	import ProjectCard from "./ProjectCard.svelte";

	export let projects;
	const sortedProjects = projects.sort(
		(projectA, projectB) => projectA.order_priority > projectB.order_priority
	);
</script>

<div class="portfolio-container">
	{#if projects}
		{#each sortedProjects as project}
			<ProjectCard
				name={project.name}
				featuredImageUrl={project.featured_image.formats}
				link={project.link}
				repo={project.repo}
				tags={project.tags}
				description={project.description}
			/>
		{/each}
	{/if}
</div>

<style>
	.portfolio-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
