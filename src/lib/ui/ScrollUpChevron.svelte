<script>
	import Icon from "../icons/icons.svelte";
	import scrollUp from "../../helpers/scrollUp";
</script>

<div class="scroll-up-chevron" on:click={scrollUp}>
	<svg
		class="up-chevron-icon"
		width="28px"
		height="28px"
		fill="transparent"
		stroke="var(--color-4)"
		viewbox="0 0 24 24"><polyline points="18 15 12 9 6 15" /></svg
	>
	<!-- <Icon name="upChevron" hoverColor="transparent" class="up-chevron-icon" /> -->
</div>

<style>
	.scroll-up-chevron {
		position: fixed;
		bottom: 2rem;
		right: 2vw;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-bottom: 2px;
		width: 2.2rem;
		height: 2.2rem;
		background: var(--color-3);
		border-radius: 50%;
		text-align: center;
		opacity: 0.6;
		transition-duration: 0.2s;
		transition-timing-function: ease-in-out;
		z-index: 100;
	}
	.scroll-up-chevron:hover {
		cursor: pointer;
		opacity: 0.5;
	}
	:global(.up-chevron-icon) {
		position: sticky;
	}
	@media screen and (max-width: 768px) {
		.scroll-up-chevron {
			bottom: 5rem;
		}
	}
</style>
