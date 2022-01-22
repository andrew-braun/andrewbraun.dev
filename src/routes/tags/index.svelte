<script context="module">
	export async function load({ url, params, fetch }) {
		const fetchUrl = `/api/tags`;
		const res = await fetch(fetchUrl);

		if (res.ok) {
			return {
				props: {
					tags: await res.json(),
					url: url,
					params: params
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
	export let tags;
</script>

<section class="tag-page global-top-section global-center-content">
	<h2 class="page-title">Tags</h2>
	<ul class="tag-container">
		{#if tags}
			{#each tags as tag}
				<li class="tag-list-element">
					<a href="/tags/{tag.slug}" class="tag-link">{tag.tagname}</a>
					({tag.projects.length})
				</li>
			{/each}
		{/if}
	</ul>
</section>

<style>
	.page-title {
		padding: 1rem 0;
		text-transform: uppercase;
	}
</style>
