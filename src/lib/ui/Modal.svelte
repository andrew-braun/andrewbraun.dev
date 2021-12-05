<script>
	import { fade, blur, fly, slide, scale } from "svelte/transition";
	import { clickOutside } from "../../helpers/clickOutside";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	const handleClickOutside = () => {
		dispatch("message", {
			text: "Hello!"
		});
	};
	function sayHello() {
		console.log("Child event firing!");
		dispatch("message", {
			text: "Hello!"
		});
	}

	export let isOpen = false;
</script>

{#if isOpen}
	<aside
		class="modal"
		transition:fade={{ duration: 500 }}
		use:clickOutside
		on:click_outside={handleClickOutside}
	>
		<button on:click={sayHello}>Close</button>
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
