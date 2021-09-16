<script>
	import Icon from '../lib/icons/icons.svelte';
</script>

<div class="main-layout">
	<header class="layout-header">
		AndrewBraun.dev
		<nav>
			<a href="/">Home</a>
		</nav>
	</header>
	<section class="layout-grid">
		<aside class="left-bar">
			<a href="https://facebook.com/andrewbraundev">FB</a>
			<Icon name="trash" width="2rem" height="2rem" />
		</aside>
		<main class="layout-main">
			<slot />
		</main>
		<aside class="right-bar">
			<a href="mailto:andrew@andrewbraun.dev">Mail</a>
		</aside>
	</section>
	<footer class="layout-footer">
		<p>Made by Andrew Braun</p>
	</footer>
</div>

<style>
	.main-layout {
	}
	.layout-grid {
		display: grid;
		grid-template-columns: 60px auto 60px;
	}
	.layout-main {
		min-height: 80vh;
	}
	.layout-footer {
		display: flex;
		justify-content: center;
	}
</style>
