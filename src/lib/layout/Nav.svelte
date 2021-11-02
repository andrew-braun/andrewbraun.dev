<script>
</script>

<nav class="main-nav">
	<a class="nav-link" id="about-link" href="#about" rel="external">About</a>
	<a class="nav-link" id="contact-link" href="#contact" rel="external">Contact</a>
	<a class="nav-link" id="my-work-link" href="#my-work" rel="external">My Work</a>
</nav>

<style>
	.main-nav {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex: 1 1 auto;
		min-width: 15rem;
		height: 100%;
	}
	.nav-link {
		display: block;
		padding: 1rem;
		color: var(--dark-text-1);
	}
	.nav-link:hover {
		border-color: white;
	}

	@media only screen and (max-width: 768px) {
		.main-nav {
			display: none;
		}
	}
</style>
