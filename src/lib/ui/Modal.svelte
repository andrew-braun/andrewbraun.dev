<script>
	import { clickOutside } from "../../helpers/clickOutside";

	function handleClickOutside(event) {
		isOpen = false;
	}

	export let isOpen = false;
</script>

{#if isOpen}
	<aside class="modal" use:clickOutside on:click_outside={handleClickOutside}>
		<slot name="content" />
	</aside>
{/if}

<style>
	.modal {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: clamp(320px, 80vw, 800px);
		height: clamp(400px, 75vh, 600px);
		background: var(--dark-background-1-semi-trans);

		z-index: 1000;
	}
</style>
