<script>
	import Icon from "@iconify/svelte";
	import IconifyIcon from "../lib/icons/IconifyIcon.svelte";
</script>

<div id="services-page-container" class="global-top-section">
	<h1>Services</h1>
	<div id="wordpress-service" class="service-container">
		<div class="column column-1">
			<IconifyIcon name="brandico:wordpress" />
			<h2 class="service-title">WordPress</h2>
			<div class="service-description">
				<p>
					I've worked on a lot of WordPress sites, from simple blogs to ecommerce and real estate
					setups. I have the HTML, CSS, JavaScript, PHP, and SQL skills to bring designs to life,
					implement custom features, and track down whatever issues your site is experiencing.
				</p>
			</div>
		</div>
		<div id="wordpress-services" class="column column-2">
			<div id="wordpress-new-build" class="service-type">
				<h3 class="service-heading">New Build</h3>
			</div>
			<div id="wordpress-rebuild" class="service-type">
				<h3 class="service-heading">Rebuild</h3>
			</div>
			<div id="wordpress-troubleshooting" class="service-type">
				<h3 class="service-heading">Troubleshooting</h3>
			</div>
		</div>
	</div>
</div>

<style>
	#services-page-container {
		padding-left: 10%;
		padding-right: 10%;
	}
	.service-container {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}

	.column-1 {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 4%;
	}
	.column-2 {
	}

	.service-title {
	}
	.service-type {
		min-height: 5rem;
		padding: 1%;
	}
	#wordpress-new-build {
		background: var(--color-3);
	}
	#wordpress-rebuild {
		background: var(--color-1);
	}
	#wordpress-troubleshooting {
		background: var(--color-2);
	}
</style>
