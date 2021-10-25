<script>
	import Icon from "../icons/icons.svelte";
	import "../../global.css";
</script>

<section role="navigation" class="tab-bar">
	<nav class="main-nav">
		<a class="nav-link" id="about-link" href="#about"
			><Icon name="info" hoverColor="transparent" />About</a
		>
		<a class="nav-link" id="contact-link" href="#contact"
			><Icon name="message" hoverColor="transparent" />Contact</a
		>
		<a class="nav-link" id="my-work-link" href="#my-work"
			><Icon name="tool" hoverColor="transparent" />My Work</a
		>
	</nav>
</section>

<style>
	.tab-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		min-height: 3rem;
	}
	.tab-bar .nav-link {
		background: var(--dark-background-1);
		color: var(--dark-text-1);
	}
	@media only screen and (min-width: 768px) {
		.tab-bar {
			display: none;
		}
	}
	.main-nav {
		display: flex;
		justify-content: space-evenly;
		width: 100%;
	}
	.nav-link {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1 1 auto;
		padding: 0.5rem;
		font-size: 0.9rem;
		text-align: center;
		box-shadow: 0px 3px 2px 1px rgba(0, 0, 0, 0.55);
	}
	.nav-link:hover {
		background: var(--color-2);
	}
</style>
