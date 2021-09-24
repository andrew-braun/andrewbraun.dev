<script>
	import Nav from "./Nav.svelte";
</script>

<section role="navigation" class="tab-bar">
	<Nav />
</section>

<style>
	.tab-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		padding-top: 1rem;
		background: var(--background-1);
	}
	@media only screen and (min-width: 768px) {
		.tab-bar {
			display: none;
		}
	}
</style>
