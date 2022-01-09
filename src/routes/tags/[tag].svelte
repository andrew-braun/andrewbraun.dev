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
	import "../../style/global.css";

	// onMount(() => {
	// 	projects = tagData;
	// });

	export let slug;
	export let tagData;
</script>

<section class="tagged-projects-section global-top-section global-center-content">
	<div class="tagged-projects-container">
		<h2 class="tag-title global-heading">{slug}</h2>
		{#key tagData}
			<PortfolioContainer projects={tagData} />
		{/key}
	</div>
</section>

<style>
	.tagged-projects-section {
		display: flex;
		justify-content: center;
	}
	.tag-title {
		width: 100%;
		text-transform: uppercase;
		padding-left: 5%;
	}
	.tagged-projects-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding-bottom: 15%;
	}
	@media screen and (max-width: 768px) {
		.tag-title {
			text-align: center;
			padding-left: 0;
		}
	}
	@media screen and (max-width: 480px) {
		.tagged-projects-section {
			padding: 5rem 0;
		}
		.tagged-projects-container {
			padding: 0;
		}
	}
</style>
