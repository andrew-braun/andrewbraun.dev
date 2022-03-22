<script>
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	export let tabs;
	export let activeTab;

	let contentContainer;
	let isTransitioning = false;

	let currentTabContent = tabs[0].content;
	console.log(tabs);

	$: {
		isTransitioning = true;
		setTimeout(() => {
			isTransitioning = false;
			currentTabContent = tabs[activeTab].content;
		}, 400);
	}
</script>

<article
	class={`tab-content`}
	class:slideOut={isTransitioning}
	class:slideIn={!isTransitioning}
	bind:this={contentContainer}
>
	{@html currentTabContent}
</article>

<style>
	.slideIn {
		animation: slideIn 0.4s linear forwards;
	}
	@keyframes slideIn {
		from {
			transform: translate(-75%);
			opacity: 0;
		}
		to {
			transform: translate(0%);
			opacity: 1;
		}
	}

	.slideOut {
		animation: slideOut 0.4s linear forwards;
	}
	@keyframes slideOut {
		from {
			transform: translate(0%);
			opacity: 1;
		}
		to {
			transform: translate(75%);
			opacity: 0;
		}
	}
</style>
