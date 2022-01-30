<script>
	import Button from "../ui/Button.svelte";
</script>

<form class="contact-form">
	<div class="input-container">
		<label class="contact-form-label" for="contact-name">Name</label>
		<input id="contact-name" name="contact-name" class="contact-form-field" type="text" />
	</div>
	<div class="input-container">
		<label class="contact-form-label" for="contact-email">Email</label>
		<input id="contact-email" name="contact-email" class="contact-form-field" type="email" />
	</div>
	<!-- <input class="contact-form-submit-button" type="submit" value="submit" />
     -->
	<div class="submit-button-container">
		<Button type="submit" classNames="submit-form-button">Submit</Button>
	</div>
</form>

<style>
	.contact-form {
		width: clamp(20rem, 100%, 25rem);
	}
	.input-container {
		display: flex;
		flex-direction: column;
		margin: 0.5rem 0;
	}
	.contact-form-label {
		margin-bottom: -0.55rem;
		margin-left: 1rem;
		font-size: 0.8rem;
		z-index: 10;
	}
	.contact-form-field {
		padding: 0.8rem 0.5rem 0.6rem 0.5rem;
		border: none;
		border-radius: 5px;
		background: hsla(0, 0%, 100%, 0.15);
		color: var(--dark-text-1);
		transition: all 0.3s ease-in-out;
	}
	.contact-form-field:hover,
	.contact-form-field:active,
	.contact-form-field:focus {
		background: hsla(0, 0%, 100%, 0.25);
	}

	.contact-form-field:focus {
		outline-style: inset;
		outline-color: var(--color-3);
		outline-width: 2px;
		z-index: 1;
	}
	.submit-button-container {
		display: flex;
		justify-content: center;
		margin-top: 1.5rem;
	}
</style>
