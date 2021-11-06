<script>
	let background = false;

	const transparentLogo = "/images/brand/ab-dev-transparent-logo.svg";
	const backgroundLogo = "/images/brand/ab-dev-logo.svg";
</script>

{#if background}
	<img src={backgroundLogo} alt="Logo for AndrewBraun.dev" />
{:else}
	<img src={transparentLogo} alt="Logo for AndrewBraun.dev" />
{/if}
