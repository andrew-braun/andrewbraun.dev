<script>
	import Icon from "@iconify/svelte";

	export let name;
	export let subtitle;
</script>

<div class="icon-container">
	<Icon icon={name} alt={subtitle} />
	<p class="icon-subtitle">{subtitle}</p>
</div>

<style>
	.icon-container {
		text-align: center;
	}
	.icon-list-icon {
		display: flex;
		flex-direction: column;
	}
	.icon-subtitle {
		margin: 0;
	}
	:global(.iconify--vscode-icons) {
		position: relative;
		width: 50px;
		height: 50px;
		margin: 0.25rem 0.25rem 0 0.25rem;
	}
</style>
