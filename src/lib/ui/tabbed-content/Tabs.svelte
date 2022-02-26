<script context="module">
	export const tabsKey = {};
</script>

<script>
	import { setContext, onMount } from "svelte";
	import { writable } from "svelte/store";

	const tabs = writable([]);
	const selectedTab = writable(null);
	setContext(tabsKey, {
		tabs,
		selectedTab
	});

	onMount(() => {
		if ($tabs.length > 0) $selectedTab = $tabs[0];
	});

	let tabContentVisible = true;
</script>

<div class="tabs-container">
	<div class="tabs">
		<slot isTitle={true} isContent={false} />
	</div>
	<div class="tab-content">
		<slot isTitle={false} isContent={true} />
	</div>
</div>

<style>
	.tabs {
		display: flex;
		justify-content: center;
		border-bottom: 1px solid var(--color-3);
	}
	.tab-content {
		position: relative;
		/* left: -150%; */
		/* opacity: 0; */
		padding: 4% 2%;
		/* animation: slideInLeft 0.3s ease-in-out; */
	}
</style>
