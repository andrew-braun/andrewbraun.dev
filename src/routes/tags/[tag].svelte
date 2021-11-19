<script>
	import { page } from "$app/stores";
	import { fetchStrapi } from "../../helpers/api/fetchStrapi";

	import ProjectCard from "../../lib/portfolio/ProjectCard.svelte";

	let slug;
	page.subscribe((props) => {
		slug = props.params.tag;
	});

	let projectList;

	fetchStrapi(`https://cms.andrewbraun.dev/tags?tagname=${slug}`).then((object) => {
		projectList = object[0].projects;
		console.log(projectList);
	});
</script>

<div class="tag-projects-container">
	{#if projectList}
		{#each projectList as project}
			<ProjectCard
				name={project.name}
				featuredImageUrl={project.featured_image.formats.small.url}
				link={project.link}
			/>
		{/each}
	{/if}
</div>
