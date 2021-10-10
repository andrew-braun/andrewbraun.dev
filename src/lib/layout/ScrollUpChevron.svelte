<script>
	import Icon from "../icons/icons.svelte";

	const handleScrollUpClick = (event) => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth"
		});
	};
</script>

<div class="scroll-up-chevron" on:click={handleScrollUpClick}>
	<Icon name="upChevron" hoverColor="transparent" class="up-chevron-icon" />
</div>

<style>
	.scroll-up-chevron {
		position: fixed;
		bottom: 2rem;
		right: 2vw;
		width: 2.2rem;
		height: 2.2rem;
		background: gray;
		border-radius: 50%;
		text-align: center;
		opacity: 0.6;
		transition-duration: 0.2s;
		transition-timing-function: ease-in-out;
	}
	.scroll-up-chevron:hover {
		cursor: pointer;
		opacity: 0.3;
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
