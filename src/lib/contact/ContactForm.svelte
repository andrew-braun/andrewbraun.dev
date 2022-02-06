<script>
	import Button from "../ui/Button.svelte";

	let formName = "";
	let formEmail = "";
	let formMessage = "";
	let submitButtonText = "Send Message";

	const contactFormHandler = async () => {
		try {
			fetch("https://andrewbraun.dev/.netlify/functions/contact-form", {
				method: "POST",
				body: JSON.stringify({
					name: formName,
					email: formEmail,
					message: formMessage
				})
			});

			formName = "";
			formEmail = "";
			formMessage = "";

			submitButtonText = "Message Sent!";

			setTimeout(() => {
				submitButtonText = "Send Message";
			}, 3000);
		} catch (error) {
			console.log(error);
		}
	};
</script>

<form class="contact-form" on:submit|preventDefault={contactFormHandler}>
	<div class="input-container">
		<label class="contact-form-label" for="contact-name">Name</label>
		<input
			id="contact-name"
			name="contact-name"
			class="contact-form-field"
			type="text"
			bind:value={formName}
			required
		/>
	</div>
	<div class="input-container">
		<label class="contact-form-label" for="contact-email">Email</label>
		<input
			id="contact-email"
			name="contact-email"
			class="contact-form-field"
			type="email"
			bind:value={formEmail}
		/>
	</div>
	<div class="input-container">
		<label class="contact-form-label" for="contact-message">Message</label>
		<textarea
			id="contact-message"
			name="contact-message"
			class="contact-form-field contact-form-textarea"
			type="email"
			bind:value={formMessage}
		/>
	</div>

	<div class="submit-button-container">
		<Button type="submit" classNames="submit-form-button">{submitButtonText}</Button>
	</div>
</form>

<style>
	.contact-form {
		width: clamp(18rem, 100%, 25rem);
	}
	.input-container {
		display: flex;
		flex-direction: column;
		margin: 0.5rem 0;
	}
	.contact-form-label {
		max-width: max-content;

		margin-bottom: -0.57rem;
		margin-left: 1rem;
		padding: 0.2rem 0.5rem 0.15rem 0.5rem;
		line-height: 1;
		/* border: 1px solid hsla(0, 0%, 100%, 0.15); */
		border-radius: 3px;
		font-size: 0.8rem;
		z-index: 10;
		background: var(--dark-background-2);
	}
	.contact-form-field {
		padding: 0.8rem 0.5rem 0.6rem 0.5rem;
		border: none;
		border-radius: 5px;
		background: hsla(0, 0%, 100%, 0.15);
		color: var(--dark-text-1);
		transition: all 0.3s ease-in-out;
	}
	.contact-form-textarea {
		height: 10rem;
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
