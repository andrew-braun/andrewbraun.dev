<script>
	import { fade, blur, fly, slide, scale } from "svelte/transition";
	import { clickOutside } from "../../helpers/clickOutside";

	const closeModal = () => {
		isOpen = !isOpen;
	};

	export let isOpen = false;
</script>

<svelte:window on:keydown={(event) => (event.key === "Escape" && isOpen ? closeModal() : "")} />
{#if isOpen}
	<aside
		class="modal"
		transition:fade={{ duration: 500 }}
		use:clickOutside
		on:click_outside={closeModal}
	>
		<button on:click={closeModal} class="modal-close-button">X</button>
		<slot name="content" />
	</aside>
{/if}

<style>
	.modal {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: clamp(320px, 90vw, 1000px);
		height: clamp(400px, 80vh, 600px);
		border-radius: 10px;
		background: var(--dark-background-1-semi-trans);
		overflow: hidden;
		z-index: 1000;
	}
	.modal-close-button {
		position: absolute;
		top: 0.4rem;
		right: 0.5rem;
		padding: 0 0.6rem;
		border: 0;
		border-radius: 10px;
		background: var(--dark-background-2-semi-trans);
		font-size: 1.7rem;
		color: var(--color-2);
		z-index: 1000;
		cursor: pointer;
		transition: all 0.3s ease-in-out;
	}
	.modal-close-button:hover {
		background: var(--color-3);
		color: white;
	}
</style>
