<script context="module">
	export const prerender = true;
</script>

<script>
	import { page } from "$app/stores";
	import { fetchStrapi } from "../../helpers/api/fetchStrapi";

	import ProjectCard from "../../lib/portfolio/ProjectCard.svelte";

	let slug;
	page.subscribe((props) => {
		slug = props.params.tag;
	});

	let projectList;

	fetchStrapi(`https://cms.andrewbraun.dev/tags?slug=${slug}`).then((object) => {
		projectList = object[0].projects;
		console.log(projectList);
	});
</script>

<section class="tagged-projects-section global-top-section global-center-content">
	<h2 class="tag-title">{slug}</h2>
	<div class="tagged-projects-container">
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
</section>

<style>
	.tagged-projects-section {
		padding-left: 10%;
		padding-right: 10%;
	}
	.tag-title {
		padding: 1rem 0;
		text-transform: uppercase;
	}
	.tagged-projects-container {
		display: flex;
		flex-wrap: wrap;
		padding: 5%;
		background: var(--dark-background-1);
	}
</style>
