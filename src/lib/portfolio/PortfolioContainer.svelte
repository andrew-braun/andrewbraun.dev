<script>
	import ProjectCard from "./ProjectCard.svelte";

	export let projects;
</script>

<div class="portfolio-container">
	{#if projects}
		{#each projects as project}
			<ProjectCard
				name={project.name}
				featuredImageUrl={project.featured_image.formats.small.url}
				link={project.link}
				tags={project.tags}
				excerpt={project.description}
			/>
		{/each}
	{/if}
</div>

<style>
	.portfolio-container {
		display: flex;
		flex-wrap: wrap;
	}
</style>
