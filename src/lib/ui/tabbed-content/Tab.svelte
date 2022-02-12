<script>
	import { tabsKey } from "./Tabs.svelte";

	import { getContext, onMount } from "svelte";

	export let id;
	export let isTitle;
	export let isContent;

	const { selectedTab, tabs } = getContext(tabsKey);
	$tabs = $tabs.some((tab) => tab == id) ? $tabs : [...$tabs, id];

	$: isSelected = id == $selectedTab;
</script>

{#if isTitle}
	<button
		type="button"
		class="tab-button"
		class:selected={isSelected}
		on:click={() => ($selectedTab = id)}
	>
		<slot name="title" />
	</button>
{/if}

{#if isContent && isSelected}
	<slot />
{/if}

<style>
	.tab-button {
		flex: 1 1 auto;
		width: clamp(9rem, 11rem, 100%);
		margin: 0.1rem;
		padding: 0.5rem 0;
		background: transparent;
		border: 1px solid var(--color-3);
		border-width: 1px 1px 0 1px;
		border-radius: 5px 5px 0 0;
		font-weight: 600;
		text-transform: uppercase;
		color: var(--dark-text-1);
	}
	.tab-button:hover {
		cursor: pointer;
	}
	.selected {
		background: linear-gradient(to right, var(--color-2), var(--color-3));
	}
</style>
