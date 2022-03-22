<script>
	export let tab;
	export let index;
	export let activeTab;

	const handleTabClick = (event) => {
		activeTab = index;
	};
</script>

<button class="tab-button" on:click={handleTabClick}>{tab.title}</button>
