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
						strokeWidth={item.name === "polywork" ? "0.08rem" : undefined}
						class={`icon-${item.name}`}
					/>
				</a>
			{:else}
				{@html item.content}
			{/if}
		{/each}
	{/if}
</div>

<style>
	.sidebar-content a {
		display: block;
	}
</style>
