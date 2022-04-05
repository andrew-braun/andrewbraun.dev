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
		max-width: 90%;
		padding: 0.5rem 1rem;
	}
	.icon-list-title {
		margin-bottom: 0.5rem;
	}
	.icon-list {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		max-width: 80%;
		margin: auto;
	}
</style>
