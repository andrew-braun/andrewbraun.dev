<header class="layout-header">
	AndrewBraun.dev
	<nav>
		<a href="/">Home</a>
	</nav>
</header>
<main class="layout-main">
	<slot />
</main>
<footer class="layout-footer">
	<p>Made by Andrew Braun</p>
</footer>

<style>
	.layout-main {
		min-height: 80vh;
	}
	.layout-footer {
		display: flex;
		justify-content: center;
	}
</style>
