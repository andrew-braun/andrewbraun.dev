<script context="module">
	export async function load({ url, params, fetch }) {
		const fetchUrl = `/api/projects?tags.tagname_contains=${params.tag}`;
		const res = await fetch(fetchUrl);

		if (res.ok) {
			return {
				props: {
					tagData: await res.json(),
					slug: params.tag
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
	export const prerender = true;
</script>

<script>
	// import { page } from "$app/stores";
	import { afterUpdate, beforeUpdate, onMount } from "svelte";
	import PortfolioContainer from "../../lib/portfolio/PortfolioContainer.svelte";

	// onMount(() => {
	// 	projects = tagData;
	// });

	export let slug;
	export let tagData;
</script>

<section class="tagged-projects-section global-top-section global-center-content">
	<h2 class="tag-title">{slug}</h2>
	<div class="tagged-projects-container">
		{#key tagData}
			<PortfolioContainer projects={tagData} />
		{/key}
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
