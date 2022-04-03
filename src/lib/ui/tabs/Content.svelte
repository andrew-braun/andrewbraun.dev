<script>
	export let tabs;
	export let activeTab;

	let isTransitioning = false;

	let currentTabContent = tabs[0].content;

	$: {
		isTransitioning = true;
		setTimeout(() => {
			isTransitioning = false;
			currentTabContent = tabs[activeTab].content;
		}, 400);
	}
</script>

<article class={`tab-content`} class:slideOut={isTransitioning} class:slideIn={!isTransitioning}>
	{@html currentTabContent}
</article>

<style>
	.tab-content {
		padding-top: 1rem;
	}
</style>
