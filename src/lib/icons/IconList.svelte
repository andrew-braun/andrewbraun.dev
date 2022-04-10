<script>
	export let title;
</script>

<div class="icon-list-container">
	<h3 class="icon-list-title">{title}</h3>
	<div class="icon-list">
		<slot />
	</div>
</div>

<style>
	.icon-list-container {
		padding: 0 1rem 1rem 1rem;
		margin: 1rem 0;
		border-style: solid;
		border-color: var(--color-3);
		border-width: 0 0 0 1px;
	}
	.icon-list-title {
		margin-bottom: 1rem;
		color: var(--color-3);
	}
	.icon-list {
		display: flex;
		/* justify-content: space-evenly; */
		flex-wrap: wrap;

		margin: auto;
	}
	@media only screen and (max-width: 480px) {
		.icon-list {
			justify-content: center;
		}
	}
</style>
