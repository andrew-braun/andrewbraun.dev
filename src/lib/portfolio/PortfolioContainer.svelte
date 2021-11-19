<script>
	import ProjectCard from "./ProjectCard.svelte";
	import { fetchStrapi } from "../../helpers/api/fetchStrapi.js";

	let projectList;

	fetchStrapi(`https://cms.andrewbraun.dev/projects`).then((object) => {
		projectList = object;
		console.log(projectList);
	});
</script>

<div class="portfolio-container">
	<!-- <h2>hi</h2> -->
	{#if projectList}
		{#each projectList as project}
			<ProjectCard
				name={project.name}
				featuredImageUrl={project.featured_image.formats.small.url}
				link={project.link}
				tags={project.tags}
			/>
		{/each}
	{/if}
</div>
