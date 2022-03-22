<script>
	import Tab from "./Tab.svelte";
	import Content from "./Content.svelte";
	/* Expects array of objects with title and content properties */
	export let tabs;

	let activeTab = 0;
</script>

<div class="tab-container">
	<div class="tab-bar">
		{#each tabs as tab, index}
			<Tab {tab} {index} bind:activeTab />
		{/each}
	</div>
	<Content {tabs} {activeTab} />
</div>

<style>
</style>
