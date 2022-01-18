<script>
	export let background = "var(--color-1)";
	export let className = "";
	export let textColor = "var(--dark-text-1)";
	export let fontSize = "1.4rem";
	export let borderRadius = "5px";
	export let link = false;
	export let onClick = (event) => console.log(event.target);
	export let noRouteChange = true;
	// export let noScroll = true;
	export let width = "100%";
	export let prefetch = true;

	const isStyled = background || textColor || width || fontSize;

	const buttonStyles = `background: ${background}; 
		color: ${textColor}; 
		width: ${width};
		font-size: ${fontSize};
		border-radius: ${borderRadius};
		
	`;

	const returnedStyles = isStyled ? (isStyled ? buttonStyles : "") : null;
</script>

{#if link}
	<a
		href={link}
		sveltekit:noscroll
		sveltekit:keepfocus
		class="button link {className ? className : ''}"
		style={returnedStyles}
		rel={noRouteChange ? (noRouteChange ? "external" : "") : ""}
		sveltekit:prefetch={prefetch ? true : undefined}
	>
		<slot />
	</a>
{:else}
	<button
		class="button internal {className ? className : ''}"
		style={returnedStyles}
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

		background: var(--color-1);
		font-size: 1.25rem;
		font-weight: 600;
		text-align: center;
		color: var(--dark-text-1);
		transition-duration: var(--transition-duration-long);
		transition-timing-function: ease-in-out;
	}

	.button.internal:hover {
		cursor: pointer;
		box-shadow: inset 30rem 0 0 0 var(--color-3);
	}

	.button.link:hover {
		cursor: pointer;
		box-shadow: inset 30rem 0 0 0 var(--color-3);
	}
	.tags-read-more {
		margin: 0.2rem;
		padding: 0.5rem;
		background: linear-gradient(to right, var(--color-2), var(--color-3));
	}
</style>
