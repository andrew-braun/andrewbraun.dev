<script>
	import VerticalSidebar from "../lib/layout/VerticalSidebar.svelte";
	import { socialLinks } from "../data/social-links.js";
	import Header from "../lib/layout/Header.svelte";
	import TabBar from "../lib/layout/TabBar.svelte";
	import ScrollUpChevron from "../lib/ui/ScrollUpChevron.svelte";
	import Footer from "../lib/layout/Footer.svelte";
</script>

<svelte:head>
	<title>AndrewBraun.dev - WordPress, React, Svelte, and More</title>
	<meta name="author" content="Andrew Braun" />
	<meta
		name="description"
		content="I'm a web developer working with JavaScript, React, Next.js, WordPress, Svelte, and more!
		Contact me if you're interested in building a new website or fixing up an existing one :)"
	/>
	<meta property="og:image" content="https://developer.mozilla.org/static/img/opengraph-logo.png" />
	<meta
		property="og:description"
		content="I'm a web developer working with JavaScript, React, Next.js, WordPress, Svelte, and more!
		Contact me if you're interested in building a new website or fixing up an existing one :)"
	/>
	<meta property="og:title" content="AndrewBraun.dev - WordPress, React, Svelte, and More" />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<div class="main-layout">
	<Header />
	<section class="layout-grid">
		<aside class="vertical-sidebar left-bar">
			<VerticalSidebar class="left-vertical-sidebar" side="left" content={socialLinks} />
		</aside>
		<main class="layout-main">
			<slot />
		</main>
	</section>
	<Footer />
	<TabBar />
	<ScrollUpChevron />
</div>

<style>
	.layout-grid {
		position: relative;
	}
	.layout-main {
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
	.layout-footer {
		display: flex;
		justify-content: center;
	}
	@media only screen and (max-width: 480px) {
		.vertical-sidebar {
			display: none;
		}
	}
</style>
