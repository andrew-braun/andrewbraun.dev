<script context="module">
	/* Load initial project list via API call*/
	export async function load({ url, params, fetch }) {
		const fetchUrl = `/api/projects`;
		const res = await fetch(fetchUrl);

		if (res.ok) {
			return {
				props: {
					projects: await res.json(),
					url: url,
					params: params
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
	export const prerender = true;
</script>

<script>
	import "/src/style/global.css";
	import "../style/animations.css";
	import Button from "../lib/ui/Button.svelte";
	import TabContainer from "../lib/ui/tabs/TabContainer.svelte";

	import HeroImage from "../lib/layout/HeroImage.svelte";
	import NerdMode from "../data/about-tabs/NerdMode.svx";
	import PersonalMode from "../data/about-tabs/PersonalMode.svx";
	import ProfessionalMode from "../data/about-tabs/ProfessionalMode.svx";

	import { socialLinks } from "../data/social-links";
	import SocialIcons from "../lib/social/SocialIcons.svelte";
	import ContactForm from "../lib/contact/ContactForm.svelte";

	import PortfolioContainer from "../lib/portfolio/PortfolioContainer.svelte";

	export let projects;

	const tabs = [
		{ title: "Professional Mode", content: ProfessionalMode },
		{ title: "Personal Mode", content: PersonalMode },
		{ title: "Nerd Mode", content: NerdMode }
	];
</script>

<div class="content-container">
	<section class="hero-section">
		<div class="hero-flavor-container">
			<div class="hero-flavor-image">
				<HeroImage />
			</div>
		</div>
		<div class="hero-info-container global-top-section">
			<div class="hero-info-text">
				<!-- Add links to socials on hover-->

				<p>
					I'm <span class="extra-info-text">Andrew Braun</span>
				</p>

				<!--Add list of languages on hover-->
				<p>
					I write <span class="extra-info-text">code</span>,
				</p>
				<!--Add links on hover-->
				<p>
					build <span class="extra-info-text">websites</span>,
				</p>
				<!--Other links-->
				<p>
					and do other <span class="extra-info-text">nerd things</span>
				</p>

				<div class="hero-cta">
					<Button link="mailto:andrew@andrewbraun.dev" prefetch={false}>
						Do nerd things for me</Button
					>
				</div>
			</div>
		</div>
	</section>
	<section class="my-work-section page-section">
		<h2 id="my-work" class="global-heading">My Work</h2>

		<div class="my-work-portfolio-items">
			{#if projects}
				{#key projects}
					<PortfolioContainer {projects} />
				{/key}
			{/if}
		</div>
	</section>

	<section class="about-section page-section">
		<h2 id="about" class="global-heading">About</h2>

		<div class="about-section-container">
			<div class="about-text-container">
				<TabContainer {tabs} />
			</div>
			<div class="about-image-container">
				<img
					src="https://res.cloudinary.com/andrewbraun-dev/image/upload/v1644650135/profile_pic_lights_6b392d17cb.png"
					class="about-image"
					alt="Headshot of Andrew Braun against a blurred city light background"
				/>
			</div>
		</div>
	</section>
	<section class="contact-section page-section">
		<div class="global-heading">
			<h2 id="contact" class="">Contact Me</h2>
			<p style="font-size: .7rem; font-style: italic; margin: 0; padding: 0;">
				I don't bite--I byte!
			</p>
		</div>

		<div class="contact-section-container">
			<div class="contact-form-container">
				<ContactForm />
			</div>
			<div class="social-container">
				<SocialIcons content={socialLinks} />
			</div>
		</div>
	</section>
</div>

<style>
	.page-section {
		/* padding: 1rem calc(1.5rem + 4vw) 1rem calc(2.5rem + 4vw);*/
		padding: 0 15% 4% 15%;
	}
	.hero-section {
		position: relative;
		display: grid;
		grid-template-columns: 2fr 5fr;
		grid-template-areas: "flavor info";
		width: 100%;
		min-height: 90vh;
		background: var(--dark-background-1);
	}
	.hero-flavor-container {
		display: flex;
		justify-content: center;
		align-items: center;
		grid-area: flavor;
		padding-top: 3rem;
		background: var(--dark-background-2);
		min-height: 100%;
		min-width: 20rem;
	}
	.hero-flavor-image {
		position: absolute;
		left: calc(4rem + 10vw);
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
		max-width: 280px;
		max-height: 280px;
		z-index: 20;
	}
	.hero-flavor-image svg {
		max-width: 260px;
		max-height: 260px;
	}
	.hero-info-container {
		position: relative;
		grid-area: info;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		opacity: 0;
		animation: fadeIn 0.5s linear forwards;
		animation-delay: 0.5s;
		z-index: 75;
	}
	.hero-info-text {
		font-family: var(--heading-font);
		height: 100%;
		background: var(--dark-background-1-trans);
		font-size: 1.5rem;
	}
	.hero-info-text p {
		margin: 0.5rem 0;
	}
	.extra-info-text {
		font-size: 1.5em;
		font-weight: 700;
	}
	.hero-cta {
		display: flex;
		justify-content: center;
		margin-top: 10%;
		margin-bottom: 8%;
	}
	@media screen and (max-width: 768px) {
		.my-work-section {
			padding: 1.2rem;
		}
		.hero-section {
			display: flex;
			flex-direction: column;
		}
		.hero-info-container {
			padding: 7rem calc(1.5rem + 4vw) 0 calc(2.5rem + 4vw);
			z-index: 10;
		}
		.hero-info-container {
			color: white;
		}
		.hero-info-text {
			padding: 0 1rem;
		}

		.hero-flavor-container {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			z-index: 1;
		}
		.hero-flavor-container::after {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			content: "";
			background: hsla(0, 0%, 0%, 0.3);
		}
		.hero-flavor-image {
			position: static;
			max-width: 280px;
			max-height: 280px;
		}
		.my-work-section {
			padding-bottom: 5%;
		}
	}
	@media screen and (max-width: 480px) {
		.hero-info-container {
			padding-top: 40%;
			padding-right: 5%;
			padding-left: 5%;
		}
	}

	.my-work-section {
		background: var(--dark-background-2);
	}

	@media screen and (max-width: 480px) {
		.hero-section {
			min-height: 70vh;
		}
		.hero-info-text {
			width: 100%;
		}
		.hero-info-text p {
			margin: 1.5rem 0;
		}
		.extra-info-text {
			font-size: 1.8rem;
		}
	}

	.about-section {
		background: var(--dark-background-1);
		overflow: hidden;
	}

	.contact-section-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 2% 0%;
		background: var(--dark-background-2);
	}
	.contact-form-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 50%;
		min-width: 320px;
		flex-grow: 1;
		padding: 0 0;
	}

	.contact-text {
		padding: 0;
		font-size: 0.9rem;
		font-style: italic;
	}

	.social-container {
		width: clamp(320px, 50%, 400px);
		flex-grow: 1;
		padding: 0 5%;
	}

	@media screen and (max-width: 768px) {
		.contact-section-container {
			padding: 0;
		}
		.social-container {
			padding: 5%;
		}
		.contact-text {
			max-width: 400px;
		}
	}
	@media screen and (max-width: 480px) {
		#my-work {
			padding: 0;
		}
		.my-work-section {
			padding-left: 2%;
			padding-right: 2%;
		}
	}

	.about-section {
		padding: 1rem 10%;
	}

	.about-section-container {
		display: flex;
		flex-wrap: wrap-reverse;
	}

	.about-text-container {
		flex: 1 1 400px;
		width: clamp(320px, 60%, 600px);
		padding: 1rem 0;
	}
	.about-image-container {
		flex: 1 1 200px;
		width: clamp(200px, 50%, 320px);
		text-align: center;
	}
	.about-image {
		width: 100%;
		max-width: 320px;
	}
	@media screen and (max-width: 480px) {
		.about-text-container {
			padding: 0;
		}
	}
</style>
