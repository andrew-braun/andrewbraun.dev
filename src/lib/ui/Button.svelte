<script>
	export let classNames = "";
	export let link = false;
	export let onClick = (event) => console.log(event.target);
	export let noRouteChange = true;
	export let prefetch = true;
</script>

{#if link}
	<a
		href={link}
		sveltekit:noscroll
		sveltekit:keepfocus
		class="button link {classNames ? classNames : ''}"
		rel={noRouteChange ? (noRouteChange ? "external" : "") : ""}
		sveltekit:prefetch={prefetch ? true : undefined}
	>
		<slot />
	</a>
{:else}
	<button class="button internal {classNames ? classNames : ''}" on:click={onClick}>
		<slot />
	</button>
{/if}

<style>
	.button {
		position: relative;
		display: block;
		width: 100%;
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

	.button.internal:hover {
		cursor: pointer;
		box-shadow: inset 30rem 0 0 0 var(--color-3);
	}

	.button.link:hover {
		cursor: pointer;
		box-shadow: inset 30rem 0 0 0 var(--color-3);
	}
	.tags-read-more {
		font-size: 0.85rem;
		min-width: 6rem;
		max-width: 7rem;
		margin: 0.2rem;
		padding: 0.5rem;
		background: linear-gradient(to right, var(--color-2), var(--color-3));
	}

	.visit-site-button {
		background: var(--color-2);
	}
</style>
