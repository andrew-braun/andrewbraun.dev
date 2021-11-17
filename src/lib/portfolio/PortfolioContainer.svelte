<script>
	import { fetchProjects } from "../../helpers/api/cms.js";

	let projectList;

	fetchProjects().then((object) => {
		projectList = object;
	});
</script>

<div class="portfolio-container">
	<!-- <h2>hi</h2> -->
	{#if projectList}
		{#each projectList as project}
			<p>{project.id}</p>
		{/each}
	{/if}
</div>
