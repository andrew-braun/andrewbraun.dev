<script>
	import Icon from "../lib/icons/icons.svelte";
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
			<a href="https://linkedin.com/in/andrewwestonbraun"> <Icon name="linkedin" /></a>
			<a href="https://github.com/andrew-braun"> <Icon name="github" /></a>
			<a href="https://twitter.com/braunecon"><Icon name="twitter" /></a>
			<a href="https://codepen.com/andrewbraun"> <Icon name="codepen" /></a>
			<a href="https://facebook.com/andrewbraun.dev"> <Icon name="facebook" /></a>
			<a href="https://polywork.com/andrewbraun" style="padding:0.2rem">
				<Icon name="polywork" strokeWidth="1.3" width="1.7rem" height="1.7rem" /></a
			>
			<a href="mailto:andrew@andrewbraun.dev"><Icon name="email" /></a>
		</aside>
		<main class="layout-main">
			<slot />
		</main>
		<aside class="right-bar">
			<a href="mailto:andrew@andrewbraun.dev"><Icon name="email" /></a>
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
