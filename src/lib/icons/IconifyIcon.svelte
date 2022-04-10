<script>
	import Icon from "@iconify/svelte";

	export let name;
	export let subtitle;
	export let background;
</script>

<div class={`icon-container`}>
	<div class={`icon ${background ? background : ""}`}>
		<Icon icon={name} alt={subtitle} />
	</div>
	<p class="icon-subtitle">{subtitle}</p>
</div>

<style>
	.icon-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 80px;
		margin: 1rem;
	}
	.icon-list-icon {
		display: flex;
		flex-direction: column;
	}

	.icon {
		display: flex;
		justify-content: center;
		width: 60px;
		height: 60px;

		padding: 0.25rem;
		text-align: center;
	}
	.icon-subtitle {
		margin: 0;
		line-height: 1.3em;
		text-align: center;
	}

	:global(svg.iconify) {
		position: relative;
		width: 50px;
		height: 50px;
		/* margin: 0.25rem 0.25rem 0 0.25rem; */
	}
	.white-background-circle {
		background: white;
		border-radius: 50%;
	}
</style>
