<script>
	export let tagname;
	export let slug;
	export let backgroundColor = "transparent";
	export let fontWeight = "500";

	const tagStyles = [`background: ${backgroundColor};`, `font-weight: ${fontWeight};`];
	const hasStyles = backgroundColor || fontWeight;
	const tagStylesString = tagStyles.join(" ");
</script>

<a
	href="/tags/{slug.toLowerCase()}"
	target="_self"
	class="portfolio-card-tag"
	style={hasStyles ? tagStylesString : ""}
	sveltekit:noscroll>{tagname}</a
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
		border-color: var(--color-3);
		border-style: solid;
		border-width: 0.5px 0.5px 1.5px 1.5px;
		background: transparent;
		font-size: 0.76rem;
		font-weight: 600;
		color: var(--dark-background-text);
		transition-duration: var(--transition-duration-very-long);
		transition-timing-function: ease-in-out;
	}
	.portfolio-card-tag:hover {
		box-shadow: inset 8rem 0 0 0 var(--color-3);
	}
</style>
