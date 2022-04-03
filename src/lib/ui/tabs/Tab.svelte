<script>
	export let tab;
	export let index;
	export let activeTab;

	const handleTabClick = (event) => {
		activeTab = index;
	};

	console.log(tab);
</script>

<button class="tab-button" class:selected={activeTab === index} on:click={handleTabClick}
	><span class="tab-title">{tab.title}</span></button
>

<style>
	.tab-button {
		position: relative;
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
		z-index: 100;
		overflow: hidden;
	}
	.tab-button:hover {
		cursor: pointer;
	}

	.selected {
		position: relative;
		/* /* background: linear-gradient(to right, var(--color-2), var(--color-3)); */
		/* transition: background 3s ease-in; */
	}

	.selected::before {
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to right, var(--color-2), var(--color-3));
		transition: background 3s ease-in;
		z-index: 5;
		animation: slideInVisible 0.6s ease-in-out forwards;
	}

	.tab-title {
		position: relative;
		z-index: 1000;
	}
</style>
