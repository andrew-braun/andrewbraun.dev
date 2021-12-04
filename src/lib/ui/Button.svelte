<script>
	export let background;
	export let className;
	export let textColor;
	export let fontSize;
	export let link;
	export let onClick;
	export let noRouteChange = true;
	export let noScroll = true;
	export let width;

	const isStyled = background || textColor || width || fontSize;

	const buttonStyles = `background: ${background}; 
		color: ${textColor}; 
		width: ${width};
		font-size: ${fontSize};
	`;

	const returnedStyles = isStyled ? (isStyled ? buttonStyles : "") : null;
</script>

{#if link}
	<a
		href={link}
		sveltekit:noscroll
		sveltekit:keepfocus
		class="button {className ? className : ''}"
		style={returnedStyles}
		on:click={(event) => event.preventDefault()}
		rel={noRouteChange ? (noRouteChange ? "external" : "") : ""}
		sveltekit:prefetch
	>
		<slot />
	</a>
{:else}
	<button class="button {className ? className : ''}" style={returnedStyles} on:click={onClick}>
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
	.tags-read-more {
		margin: 0.2rem;
		padding: 0.5rem;
		background: linear-gradient(to right, var(--color-2), var(--color-3));
	}
</style>
