<script>
	export let background;
	export let className;
	export let textColor;
	export let link;
	export let onClick;
	export let noRouteChange = true;
	export let width;

	const buttonStyles = `background: ${background}; color: ${textColor}; width: ${width}`;
</script>

{#if link}
	<a
		href={link}
		class="button {className ? className : ''}"
		style={background || textColor || width
			? background || textColor || width
				? buttonStyles
				: ""
			: null}
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
		position: relative;
		display: block;
		padding: 0.75rem;
		border: none;
		border-radius: 5px;
		background: var(--color-1);
		font-size: 1.25rem;
		font-weight: 600;
		text-align: center;
		color: var(--dark-text-1);
		transition-duration: var(--transition-duration-long);
		transition-timing-function: ease-in-out;
	}
	.button:hover {
		cursor: pointer;
		box-shadow: inset 30rem 0 0 0 var(--color-3);
	}
</style>
