<script>
	import Icon from "../icons/icons.svelte";
	export let content;
</script>

<div class="social-icons">
	{#each content as item}
		{#if item.icon}
			<a href={item.link} class="social-icon">
				<Icon
					name={item.name}
					width="4rem"
					height="4rem"
					strokeWidth="0.02rem"
					fillColor="var(--color-2)"
					hoverColor={["email", "codepen", "polywork"].includes(item.name) ? "white" : null}
					class={`icon icon-${item.name}`}
				/>
			</a>
		{:else}
			{@html item.content}
		{/if}
	{/each}
</div>

<style>
	.social-icons {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.social-icon {
		margin: 1rem;
		text-decoration: none;
		border: none;
		transition: all 0.3s ease-in-out;
	}
	.social-icon:hover {
		text-decoration: none;
		border-bottom: none;
		border-color: none;
	}
</style>
