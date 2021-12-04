<script context="module">
	export async function load({ page, fetch, session, stuff }) {
		const url = `/api/projects?tags.tagname_contains=${page.params.tag}`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					tagData: await res.json()
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
	import { page } from "$app/stores";
	import { afterUpdate } from "svelte";
	import PortfolioContainer from "../../lib/portfolio/PortfolioContainer.svelte";

	let slug;
	page.subscribe((props) => {
		slug = props.params.tag;
	});

	afterUpdate(() => {
		projects = tagData;
	});

	export let tagData;
	let projects = tagData;
</script>

<section class="tagged-projects-section global-top-section global-center-content">
	<h2 class="tag-title">{slug}</h2>
	<div class="tagged-projects-container">
		<PortfolioContainer {projects} />
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
