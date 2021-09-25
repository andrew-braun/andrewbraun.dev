<script>
	export let hideOnMobile = false;
	console.log(hideOnMobile);
</script>

<nav class={`main-nav ${hideOnMobile ? "hidden" : ""}`}>
	<a class="nav-link" id="about-link" href="#about">About</a>
	<a class="nav-link" id="contact-link" href="#contact">Contact</a>
	<a class="nav-link" id="my-work-link" href="#my-work">My Work</a>
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
	}

	@media only screen and (max-width: 768px) {
		.main-nav {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(3, 1rem);
			padding: 0.2rem 0;
			grid-gap: 0;
		}
		.nav-link {
			padding: 0.5rem;
			text-align: center;
		}
		#about-link {
			grid-column: 1;
			grid-row: 2/4;
			border: 1px solid black;
			border-width: 1px 0 0 0;
		}
		#contact-link {
			grid-column: 2;
			grid-row: 1/3;
			border: 1px solid black;
			border-radius: 10px;
		}
		#my-work-link {
			grid-column: 3;
			grid-row: 2/4;
			border: 1px solid black;
			border-width: 1px 0 0 0;
		}
	}

	@media only screen and (max-width: 768px) {
		.hidden {
			display: none;
		}
	}
</style>
