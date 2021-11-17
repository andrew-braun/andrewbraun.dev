<script>
	import ProjectCard from "./ProjectCard.svelte";
	import { fetchProjects } from "../../helpers/api/cms.js";

	let projectList;

	fetchProjects().then((object) => {
		projectList = object;
		console.log(projectList);
	});
</script>

<div class="portfolio-container">
	<!-- <h2>hi</h2> -->
	{#if projectList}
		{#each projectList as project}
			<p>{project.id}</p>
			<ProjectCard name={project.name} />
		{/each}
	{/if}
</div>
