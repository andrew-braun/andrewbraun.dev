<script>
	import { tabsKey } from "./Tabs.svelte";

	import { getContext, onMount } from "svelte";
	import { slide, fly, fade, crossfade } from "svelte/transition";
	import { flip } from "svelte/animate";

	export let id;
	export let isTitle;
	export let isContent;

	const { selectedTab, tabs } = getContext(tabsKey);
	$tabs = $tabs.some((tab) => tab == id) ? $tabs : [...$tabs, id];

	$: isSelected = id == $selectedTab;
	let isTransitioning = false;
</script>

{#if isTitle}
	<button
		type="button"
		class={`tab-button`}
		class:selected={isSelected}
		id={`tab-button-${id}`}
		on:click={() => {
			isTransitioning = true;
			$selectedTab = id;
			setTimeout(() => {
				isTransitioning = false;
			});
		}}
	>
		<slot name="title" />
	</button>
{/if}

{#if isContent && isSelected}
	<div
		class:fadeOut={isTransitioning}
		class="tab-content-box"
		in:fly|local={{ x: -500, duration: 500, delay: 500 }}
		out:fly|local={{ x: 500, duration: 500 }}
		id={`tab-content-${id}`}
	>
		<slot />
	</div>
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
	.tab-content-box {
		position: relative;
	}
	.selectedContent {
		animation: slideInLeft 0.5s ease-in-out forwards;
		animation-delay: 500;
	}
	.fadeOut {
		animation: slideOutRight 0.5s ease-in;
	}
</style>
