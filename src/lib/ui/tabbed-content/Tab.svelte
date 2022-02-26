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
</script>

{#if isTitle}
	<button
		type="button"
		class={`tab-button`}
		class:selected={isSelected}
		id={`tab-button-${id}`}
		on:click={() => {
			$selectedTab = id;
		}}
	>
		<slot name="title" />
	</button>
{/if}

{#if isContent && isSelected}
	<div
		class="tab-content-box"
		in:fly={{ x: -500, duration: 700, delay: 500 }}
		out:fly={{ x: 500, duration: 700 }}
		id={`tab-content-${id}`}
	>
		<slot />
	</div>
{/if}

<!-- {#if isContent && isSelected}
	<div
		class="tab-content-box"
		in:fly={{ x: -500, duration: 20000, delay: 20000 }}
		out:fly={{ x: 500, duration: 20000 }}
		id={`tab-content-${id}`}
	>
		<slot />
	</div>
{/if} -->
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
		opacity: 1;
	}
	/* .selectedContent {
		animation: slideInLeft 0.5s ease-in-out forwards;
		animation-delay: 500;
	}
	.fadeOut {
		animation: slideOutRight 0.5s ease-in;
	} */
</style>
