<script>
	import Icon from "../lib/icons/icons.svelte";
	import VerticalSidebar from "../lib/layout/VerticalSidebar.svelte";
</script>

<div class="main-layout">
	<header class="layout-header">
		AndrewBraun.dev
		<nav>
			<a href="/">Home</a>
		</nav>
	</header>

	<section class="layout-grid">
		<VerticalSidebar class="left-bar" side="left" />
		<main class="layout-main">
			<slot />
		</main>
		<aside class="right-bar">
			<a href="mailto:andrew@andrewbraun.dev"
				><Icon name="email" />
				<span class="vertical-text">andrew@andrewbraun.dev</span></a
			>
		</aside>
	</section>
	<footer class="layout-footer">
		<p>Made by Andrew Braun</p>
	</footer>
</div>

<style>
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
