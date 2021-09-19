<script>
	import Icon from "../lib/icons/icons.svelte";
	import VerticalSidebar from "../lib/layout/VerticalSidebar.svelte";
	import { socialLinks } from "../data/social-links.js";
</script>

<div class="main-layout">
	<header class="layout-header">
		AndrewBraun.dev
		<nav>
			<a href="/">Home</a>
		</nav>
	</header>

	<section class="layout-grid">
		<aside class="vertical-sidebar left-bar">
			<VerticalSidebar class="left-vertical-sidebar" side="left" content={socialLinks} />
		</aside>
		<main class="layout-main">
			<slot />
		</main>
	</section>
	<footer class="layout-footer">
		<p>Made by Andrew Braun</p>
	</footer>
</div>

<style>
	.layout-grid {
		position: relative;
	}
	.layout-main {
		min-height: 80vh;
		margin: 0 0 0 3rem;
		padding: 0 1rem;
	}
	.vertical-sidebar {
		position: fixed;
		display: flex;
		justify-content: center;
		width: 3rem;
	}
	.left-bar {
		left: 0;
		top: 6rem;
	}
	.layout-footer {
		display: flex;
		justify-content: center;
	}
</style>
