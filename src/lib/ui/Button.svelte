<script>
	export let background;
	export let className;
	export let textColor;
	export let link;
	export let onClick;
	export let noRouteChange = true;

	const buttonStyles = `background: ${background}; color: ${textColor}`;
</script>

{#if link}
	<a
		href={link}
		class="button {className ?? ''}"
		style={background || textColor ? (background || textColor ? buttonStyles : "") : null}
		on:click={onClick}
		rel={noRouteChange ? (noRouteChange ? "external" : "") : ""}
	>
		<slot />
	</a>
{:else}
	<button
		class="button {className ?? ''}"
		style={background || textColor ? buttonStyles : ""}
		on:click={onClick}
	>
		<slot />
	</button>
{/if}

<style>
	.button {
		background: var(--color-1);
		padding: 0.75rem;
		border: none;
		border-radius: 5px;
		font-size: 1rem;
		color: var(--dark-text-1);
		transition-duration: var(--transition-duration-short);
		transition-timing-function: ease-in-out;
	}
	.button:hover {
		cursor: pointer;
		opacity: 0.8;
	}
</style>
