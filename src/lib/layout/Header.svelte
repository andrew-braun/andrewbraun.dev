<script>
	import Logo from "../branding/Logo.svelte";
	import Nav from "../layout/Nav.svelte";
</script>

<header class="layout-header">
	<div class="site-branding">
		<Logo background={true} />
		AndrewBraun.dev
	</div>
	<Nav />
</header>

<style>
	.layout-header {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		min-width: 100%;
		height: clamp(5rem, 20vh, 25rem);
	}
	.site-branding {
		display: flex;
		align-items: center;
		flex: 1 1 auto;
		min-width: 25%;
		height: 100%;
	}
</style>
