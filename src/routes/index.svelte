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
	import Tab from "../lib/ui/tabbed-content/Tab.svelte";
	import Tabs from "../lib/ui/tabbed-content/Tabs.svelte";
	import HeroImage from "../lib/layout/HeroImage.svelte";

	import { socialLinks } from "../data/social-links";
	import SocialIcons from "../lib/social/SocialIcons.svelte";
	import ContactForm from "../lib/contact/ContactForm.svelte";

	import PortfolioContainer from "../lib/portfolio/PortfolioContainer.svelte";

	export let projects;
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
				<Tabs let:isTitle let:isContent>
					<Tab id="0" {isTitle} {isContent}>
						<span slot="title">Professional Mode</span>
						<h3>What do you do?</h3>
						<p>
							My name is Andrew Braun, and I'm an American full-stack web developer. I build new
							websites from the ground up, overhaul old systems, and fix issues when they arise. I'm
							flexible, friendly, and, most importantly, I am <i>excellent</i> at Googling things.
						</p>
						<p>
							If you want to know all about the technologies I use, check out the "Techy Mode" tab.
							Here, I'll simply say that I work a lot with the following:
						</p>
						<ul>
							<li>JavaScript - runs a lot of the modern web</li>
							<li>CSS - a lot of visual problems are CSS problems</li>
							<li>WordPress - powers 43% of the internet</li>
						</ul>
						<h3>What does working together look like?</h3>
						<p>Obviously, every project is different--but the process generally goes like this:</p>
						<ol>
							<li>You contact me with general details about a project.</li>
							<li>
								I look into it and assess whether I can handle it. I may have some follow-up
								questions!
							</li>
							<li>
								If I have the skills and bandwidth to take on the project, I'll give you a rough
								estimate of how many hours it will take to finish and when I think I can complete
								it.
							</li>
							<li>
								During the project, I'll keep track of my tasks using an app like Trello and
								routinely communicate with progress updates and questions.
							</li>
							<li>
								On project completion, I offer ongoing maintenance and support at my hourly rate.
								Smaller sites will likely need just an hour or two of maintenance per month, while
								more complex sites may require me to commit more time and be on call for issues.
							</li>
						</ol>
						<h3>How long have you been a web developer?</h3>
						<p>
							I've been working as a web developer on and off since graduating from university in
							2014, though I also held jobs as a writer and an English teacher for several years. I
							don't do much of that anymore, but I believe my past work has made me an effective
							communicator--and I still love teaching about my favorite subject: code!
						</p>
						<p />
					</Tab>
					<Tab id="2" {isTitle} {isContent}>
						<span slot="title">Personal Mode</span>
						<p>
							My family's first computer ran Windows 95. The modem actually made those weird 90s
							noises and blocked the phone lines. That was the soundtrack to the awakening of my
							inner computer nerd.
						</p>
						<p>
							I went through several other nerd phases--literature, history, theater, economics--but
							I was never able to escape my destiny: "person who is good with computers". So, I
							worked in the tech department in university and kept working as a web developer there
							after I graduated in 2014.
						</p>
						<p>
							I took a break from tech to teach English in South Korea and briefly pursued a
							graduate degree in economics, but after learning Python to analyze economic data, I
							finally realized that I enjoyed programming more than anything else I'd ever done...
							so by 2019 I had started learning web development.
						</p>
						<p>
							A year later, I was building websites for multiple clients, devouring all the tech
							knowledge I could in my spare time, and feeling great--and that's pretty much what I'm
							still doing!
						</p>
						<p>
							My computer runs Windows 10 now, and it doesn't make cool noises when I go online (I'd
							at least like the option!), but I'm still basically that computer geek. Time never
							goes by faster for me than when I'm solving problems and making new things.
						</p>
						<p>
							Luckily, my studies and varied career choices have left me with the communication
							skills and independent motivation I need to run a business where I can do my favorite
							things for people who need my skills! If you want to hire me for web stuff, or just
							ask a few quick questions, get in touch! I'd love to hear from you.
						</p>
					</Tab>
					<Tab id="3" {isTitle} {isContent}>
						<span slot="title">Techy Mode</span>
						<p>
							If you went straight to this tab, congratulations--you're probably a developer and/or
							a nerd. If you don't identify as either of those things, you might not know exactly
							what all this means, but it could potentially sound impressive, so maybe give it a
							quick scan anyway and hopefully you'll end up thinking I'm brilliant.
						</p>
						<p>
							At some point, I'll likely add a scale measuring how comfortable I am with all of
							these, but for now, inclusion on this list merely implies that I've worked enough with
							a technology at least enough to know what to Google.
						</p>
						<h2>Front-end Tech</h2>
						<ul>
							<li>
								Languages
								<ul>
									<li>HTML</li>
									<li>CSS</li>
									<li>JavaScript (Vanilla JS)</li>
								</ul>
							</li>
							<li>
								Frameworks
								<ul>
									<li>
										React <ul>
											<li>Next.js</li>
											<li>Gatsby</li>
										</ul>
									</li>
									<li>
										Svelte
										<ul>
											<li>SvelteKit</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
						<h2>Back-end Tech</h2>
						<ul>
							<li>
								Languages
								<ul>
									<li>JavaScript (Node.js)</li>
									<li>PHP</li>
									<li>Python</li>
								</ul>
							</li>
							<li>
								Frameworks
								<ul>
									<li>Express.js</li>
								</ul>
							</li>
							<li>
								Content Management Systems
								<ul>
									<li>WordPress</li>
									<li>Strapi</li>
									<li>NetlifyCMS</li>
								</ul>
							</li>
							<li>
								Databases <ul>
									<li>PostgreSQL</li>
									<li>MySQL</li>
									<li>Firebase</li>
									<li>MongoDB</li>
								</ul>
							</li>
							<li>
								Deployment <ul>
									<li>Netlify</li>
									<li>Vercel</li>
									<li>Github Pages</li>
									<li>Managed WordPress (SiteGround, WPEngine, Flywheel, etc.)</li>
									<li>Custom-provisioned VPS</li>
									<li>AWS</li>
								</ul>
							</li>
							<li>
								Server Stuff
								<ul>
									<li>Ubuntu</li>
									<li>Nginx</li>
									<li>Apache</li>
								</ul>
							</li>
						</ul>
						<h2>Tools and Concepts</h2>
						<ul>
							<li>
								Version Control
								<ul>
									<li>Git</li>
									<li>GitHub</li>
								</ul>
							</li>
							<li>
								Editors/IDEs
								<ul>
									<li>VS Code (HTML/CSS/JS)</li>
									<li>PyCharm (Python)</li>
									<li>Spyder (Python)</li>
								</ul>
							</li>
						</ul>
					</Tab>
				</Tabs>
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
