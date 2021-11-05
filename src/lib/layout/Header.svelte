<script>
	// import Logo from "../branding/Logo.svelte";
	import Nav from "../layout/Nav.svelte";
	import scrollUp from "../../helpers/scrollUp";
	import "../../global.css";
	let y;
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
		<div class={`header-logo ${y > 50 ? "header-logo-scrolled" : ""}`}>
			<!-- <Logo background={true} /> -->
		</div>
		<p class={`site-title ${y > 50 ? "site-title-scrolled" : ""}`}>AndrewBraun.dev</p>
	</div>
	<Nav />
</header>

<style>
	.layout-header {
		position: fixed;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		min-width: 100%;
		height: calc(4rem + 10vh);
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
		min-width: 25%;
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
