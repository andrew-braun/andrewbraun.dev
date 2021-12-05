<script>
	export let tagname;
	export let slug;
</script>

<a
	href="/tags/{slug.toLowerCase()}"
	class="portfolio-card-tag"
	sveltekit:noscroll
	sveltekit:prefetch>{tagname}</a
>

<style>
	.portfolio-card-tag {
		flex: 0 1 auto;
		display: flex;
		align-items: center;
		height: 2rem;
		padding: 0.3rem;
		margin: 0.2rem;
		border-radius: 5px;
		background: var(--dark-background-1);
		font-size: 0.75rem;
		color: var(--dark-background-text);
		transition-duration: var(--transition-duration-very-long);
		transition-timing-function: ease-in-out;
	}
	.portfolio-card-tag:hover {
		box-shadow: inset 8rem 0 0 0 var(--color-3);
	}
</style>
