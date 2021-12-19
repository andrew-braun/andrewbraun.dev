<script context="module">
	export async function load({ page, fetch, session, stuff }) {
		const url = `/api/tags`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					tags: await res.json()
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
	console.log(tags);
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
	.tag-container {
	}
</style>
