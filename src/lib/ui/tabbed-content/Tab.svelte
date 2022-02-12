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
		class="tab"
		class:selected={isSelected}
		on:click={() => ($selectedTab = id)}
	>
		<slot name="title" />
	</button>
{/if}

{#if isContent && isSelected}
	<slot />
{/if}
