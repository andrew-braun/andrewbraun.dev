<script>
	import Nav from "../layout/Nav.svelte";
	import Logo from "../branding/Logo.svelte";
	import scrollUp from "../../helpers/scrollUp";
	import "../../global.css";
	let y;

	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import { circIn } from "svelte/easing";
	let init = false;
	onMount(() => {
		init = true;
	});
</script>

<svelte:window bind:scrollY={y} />
<header class={`layout-header ${y > 50 ? "layout-header-scrolled shrink" : "grow"}`}>
	<div
		class="site-branding"
		role="button"
		tabindex="0"
		on:click={scrollUp}
		on:keypress={(event) => (event.key === "Enter" ? scrollUp() : "")}
	>
		<a href="/" class="logo-link">
			<div class={`header-logo ${y > 50 ? "header-logo-scrolled" : ""}`}>
				<Logo background={true} />
			</div>

			{#if init}
				<p
					class={`site-title ${y > 50 ? "site-title-scrolled" : ""}`}
					transition:fade={{ duration: 600, delay: 400, easing: circIn }}
				>
					AndrewBraun.dev
				</p>
			{/if}
		</a>
	</div>
	<Nav />
</header>

<style>
	.layout-header {
		position: fixed;
		height: calc(4rem + 10vh);
		min-width: 100%;
		padding: 5% 2%;
		opacity: 0;
		z-index: 100;
	}
	.layout-header-scrolled {
		height: calc(1rem + 5vh);
		background: var(--dark-background-1);
		z-index: 100;
	}
	.site-branding {
		position: relative;
		display: flex;
		align-items: center;
		flex: 1 1 auto;
		height: 100%;

		font-family: var(--heading-font);
	}
	.site-branding:hover {
		cursor: pointer;
	}
	.header-logo {
		flex: 0 1 20%;
		max-width: 3.5rem;
		max-height: auto;
	}
	.header-logo-scrolled {
		max-width: 2.5rem;
	}
	.logo-link {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		flex-grow: 1;
		width: clamp(10rem, 25%, 15rem);
	}
	.site-title {
		font-size: 1.25rem;
	}
	.site-title-scrolled {
		font-size: 1.2rem;
	}
	@media only screen and (max-width: 480px) {
		.site-title {
			font-size: 1.2rem;
		}
	}
	@keyframes shrink {
		from {
			padding: 5% 2%;
			height: calc(4rem + 5vh);
		}
		to {
			padding: 2% 2%;
			height: calc(1rem + 5vh);
			opacity: 1;
		}
	}

	@keyframes grow {
		from {
			opacity: 0;
			height: calc(1rem + 5vh);
		}
		to {
			height: calc(4rem + 5vh);
			opacity: 1;
		}
	}
	.shrink {
		animation: shrink 0.5s forwards;
	}
	.grow {
		animation: grow 0.5s forwards;
	}
</style>
