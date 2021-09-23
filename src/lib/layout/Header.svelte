<script>
	import Logo from "../branding/logo.svelte";
</script>

<header class="layout-header">
	<div class="site-branding">
		<Logo background={true} />
		AndrewBraun.dev
	</div>
	<nav class="main-nav">
		<a href="/">Home</a>
	</nav>
</header>

<style>
	.layout-header {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		min-width: 100%;
	}
	.site-branding {
		display: flex;
		align-items: center;
		min-width: 25%;
	}
	.main-nav {
		display: flex;
		justify-content: flex-end;
		flex: 1 1 auto;
		min-width: 12rem;
		padding-right: 10%;
	}
</style>
