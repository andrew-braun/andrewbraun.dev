<script>
	let background = false;
	let width = 100;
	let height = 100;

	const transparentLogo = "/images/brand/ab-dev-transparent-logo.svg";
	const backgroundLogo = "/images/brand/ab-dev-logo.svg";
</script>

{#if background}
	<img src={backgroundLogo} alt="Logo for AndrewBraun.dev" {width} {height} />
{:else}
	<img src={transparentLogo} alt="Logo for AndrewBraun.dev" {width} {height} />
{/if}
