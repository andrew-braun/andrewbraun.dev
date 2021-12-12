<script>
	import ProjectCard from "./ProjectCard.svelte";

	export let projects;
</script>

<div class="portfolio-container">
	{#if projects}
		{#each projects as project}
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
