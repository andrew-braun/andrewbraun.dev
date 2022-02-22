<script>
	import VerticalSidebar from "../lib/layout/VerticalSidebar.svelte";
	import { socialLinks } from "../data/social-links.js";
	import Header from "../lib/layout/Header.svelte";
	import TabBar from "../lib/layout/TabBar.svelte";
	import ScrollUpChevron from "../lib/ui/ScrollUpChevron.svelte";
	import Footer from "../lib/layout/Footer.svelte";
</script>

<svelte:head>
	<!-- Matomo -->
	<script>
		var _paq = (window._paq = window._paq || []);
		/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
		_paq.push(["trackPageView"]);
		_paq.push(["enableLinkTracking"]);
		(function () {
			var u = "//analytics.andrewbraun.dev/";
			_paq.push(["setTrackerUrl", u + "matomo.php"]);
			_paq.push(["setSiteId", "1"]);
			var d = document,
				g = d.createElement("script"),
				s = d.getElementsByTagName("script")[0];
			g.async = true;
			g.src = u + "matomo.js";
			s.parentNode.insertBefore(g, s);
		})();
	</script>
	<!-- End Matomo Code -->
</svelte:head>
<div class="main-layout">
	<Header />
	<section class="layout-grid">
		<aside class="vertical-sidebar left-bar">
			<VerticalSidebar side="left" content={socialLinks} />
		</aside>
		<main class="layout-content">
			<slot />
		</main>
	</section>
	<Footer />
	<TabBar />
	<ScrollUpChevron />
</div>

<style>
	.main-layout {
		min-height: 100vh;
		background: var(--dark-background-2);
	}
	.layout-grid {
		position: relative;
	}
	.layout-content {
		min-height: 80vh;
	}
	.vertical-sidebar {
		position: fixed;
		display: flex;
		justify-content: center;
		max-width: 6rem;
		z-index: 75;
	}
	.left-bar {
		padding: 8px 0 0px 2.5%;
		top: 35%;
		border-top: 1px solid black;
		border-bottom: 1px solid black;
	}

	@media only screen and (max-width: 480px) {
		.layout-content {
			min-height: 100vh;
		}
		.vertical-sidebar {
			display: none;
		}
	}
</style>
