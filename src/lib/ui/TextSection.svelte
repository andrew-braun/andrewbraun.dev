<script>
	// import { fade, blur, fly, slide, scale } from "svelte/transition";
</script>

<section class="text-section">
	<slot class="text-section-content" />
</section>

<style>
	.text-section {
		border-radius: 3px;
		background: hsla(0, 0%, 100%, 0.75);
		box-shadow: 0px 0px 2px 1px var(--color-3);
		overflow: hidden;
	}
</style>
