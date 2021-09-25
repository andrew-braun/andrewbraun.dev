<script>
	import Logo from "../branding/Logo.svelte";
	import Nav from "../layout/Nav.svelte";
</script>

<header class="layout-header">
	<div class="site-branding">
		<div class="header-logo">
			<Logo background={true} />
		</div>
		<p class="site-title">AndrewBraun.dev</p>
	</div>
	<Nav hideOnMobile={true} />
</header>

<style>
	.layout-header {
		position: fixed;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		min-width: 100%;
		height: clamp(5rem, 20vh, 25rem);
		padding: 0 5%;
	}
	.site-branding {
		position: relative;
		display: flex;
		align-items: center;
		flex: 1 1 auto;
		min-width: 25%;
		height: 100%;
	}
	.header-logo {
		min-width: 5rem;
		width: 20%;
		max-width: 15rem;
		height: auto;
	}
	.site-title {
		font-size: 2rem;
	}
	@media only screen and (max-width: 480px) {
		.site-title {
			font-size: 1.2rem;
		}
	}
</style>
