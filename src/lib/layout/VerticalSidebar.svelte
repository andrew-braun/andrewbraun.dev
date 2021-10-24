<script>
	import Icon from "../icons/icons.svelte";
	export let content;
	export let side;
</script>

<div class="sidebar-content">
	{#if side === "left"}
		{#each content as item}
			{#if item.icon}
				<a href={item.link}>
					<Icon
						name={item.name}
						strokeWidth={item.name === "polywork" ? "0.02rem" : "0.04rem"}
						hoverColor={["email", "codepen", "polywork"].includes(item.name) ? "white" : null}
						class={`icon icon-${item.name}`}
					/>
				</a>
			{:else}
				{@html item.content}
			{/if}
		{/each}
	{/if}
</div>

<style>
	.sidebar-content {
	}
	.sidebar-content a {
		display: block;
	}
	.sidebar-content a:hover {
		transform: translateX(5px);
		border-color: transparent;
	}
</style>
