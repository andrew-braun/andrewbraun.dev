<script>
	import TextSection from "../../lib/ui/TextSection.svelte";
</script>

<main>
	<h1 class="page-title">Resources for learning web development</h1>

	<div class="text-section-container">
		<h2 class="section-heading">General/Reference</h2>
		<TextSection>
			<ul class="resource-list">
				<li class="resource-list-item">
					<a href="https://freecodecamp.com" target="_blank">FreeCodeCamp</a>
				</li>
				<li class="resource-list-item">
					<a href="https://www.theodinproject.com/">The Odin Project</a>
				</li>
				<li class="resource-list-item resource-sublist-container">
					<a href="https://udemy.com" target="_blank">Udemy</a>
					<ul class="resource-sublist">
						<li class="resource-list-item">
							<a href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/"
								>The Complete Web Developer in 2022</a
							>
						</li>

						<li class="resource-list-item">
							<a href="https://www.udemy.com/course/web-projects-with-vanilla-javascript/"
								>20 Web Projects With Vanilla JavaScript
							</a>
						</li>
						<li class="resource-list-item">
							<a
								href="https://www.udemy.com/course/freelance-web-design-from-design-to-development-to-making-money/"
								>Complete Web Design: from Figma to Webflow to Freelancing</a
							>
						</li>
					</ul>
				</li>
				<li class="resource-list-item">
					<a href="https://w3schools.com" target="_blank">W3Schools</a>
				</li>
				<li class="resource-list-item">
					<a href="https://roadmap.sh" target="_blank">Roadmap.sh</a>
				</li>
				<li class="resource-list-item">
					<a href="https://developer.mozilla.org" target="_blank">Mozilla Developer Network</a>
				</li>
			</ul>
		</TextSection>
	</div>

	<div class="text-section-container">
		<h2 class="section-heading">HTML</h2>
		<TextSection>
			<ul class="resource-list">
				<li class="resource-list-item">
					<a href="https://www.freecodecamp.org/learn/responsive-web-design/"
						>FreeCodeCamp - Responsive Web Design</a
					>
				</li>
				<li class="resource-list-item">
					<a href="https://htmlreference.io/" target="_blank">HTMLReference.io</a>
				</li>
				<li class="resource-list-item">
					<a href="https://www.learn-html.org" target="_blank">Learn-html.org</a>
				</li>
				<li class="resource-list-item">
					<a href="https://developer.mozilla.org/en-US/docs/Learn/HTML" target="_blank">MDN HTML</a>
				</li>
				<li class="resource-list-item">
					<a href="https://www.w3schools.com/html/default.asp" target="_blank">W3Schools HTML</a>
				</li>
			</ul>
		</TextSection>
	</div>

	<div class="text-section-container">
		<h2 class="section-heading">CSS</h2>
		<TextSection>
			<ul class="resource-list">
				<li class="resource-list-item">
					<a href="https://www.freecodecamp.org/learn/responsive-web-design/" target="_blank"
						>FreeCodeCamp - Responsive Web Design</a
					>
				</li>
				<li class="resource-list-item">
					<a href="https://htmlreference.io/" target="_blank">HTMLReference.io</a>
				</li>
				<li class="resource-list-item">
					<a href="https://developer.mozilla.org/en-US/docs/Learn/CSS" target="_blank">MDN CSS</a>
				</li>
				<li class="resource-list-item">
					<a href="https://www.w3schools.com/css/" target="_blank">W3Schools CSS</a>
				</li>
				<li class="resource-list-item">
					<a href="https://web.dev/learn/css/" target="_blank">Google Courses</a>
				</li>
				<li class="resource-list-item">
					<a href="https://mastery.games/flexboxzombies/" target="_blank">Flexbox Zombies</a>
				</li>
				<li class="resource-list-item">
					<a href="https://flexboxfroggy.com/" target="_blank">Flexbox Froggy</a>
				</li>
				<li class="resource-list-item">
					<a href="http://www.flexboxdefense.com/" target="_blank">Flexbox Defense</a>
				</li>
				<li class="resource-list-item">
					<a href="https://cssgridgarden.com/" target="_blank">Grid Garden</a>
				</li>
				<li class="resource-list-item">
					<a href="https://flukeout.github.io/" target="_blank">CSS Diner</a>
				</li>
				<li class="resource-list-item">
					<a href="https://cssbattle.dev/" target="_blank">CSS Battle</a>
				</li>
			</ul>
		</TextSection>
	</div>

	<div class="text-section-container">
		<h2 class="section-heading">JavaScript</h2>
		<TextSection>
			<ul class="resource-list">
				<li class="resource-list-item">
					<a
						href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
						target="_blank">FreeCodeCamp - JavaScript</a
					>
				</li>
				<li class="resource-list-item">
					<a href="https://htmlreference.io/" target="_blank">HTMLReference.io</a>
				</li>
				<li class="resource-list-item">
					<a href="https://learnjavascript.online/" target="_blank">Learn JavaScript</a>
				</li>
				<li class="resource-list-item">
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/Tutorials#javascript_tutorials"
						target="_blank">MDN JS</a
					>
				</li>
				<li class="resource-list-item">
					<a href="https://javascript.info/" target="_blank">JavaScript.info</a>
				</li>
				<li class="resource-list-item">
					<a href="https://lab.reaal.me/jsrobot/" target="_blank">JSRobot</a>
				</li>
				<li class="resource-list-item">
					<a href="https://www.w3schools.com/js/" target="_blank">W3Schools JS</a>
				</li>

				<li class="resource-list-item">
					<a href="https://javascript30.com/" target="_blank">JavaScript30</a>
				</li>
				<li class="resource-list-item">
					<a
						href="https://www.udemy.com/course/web-projects-with-vanilla-javascript/"
						target="_blank"
						>20 Web Projects With Vanilla JavaScript
					</a>
				</li>
			</ul>
		</TextSection>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 10%;
	}
	h1,
	h2,
	h3,
	h4 {
		align-self: flex-start;
	}
	p {
		margin: 6px 0;
	}
	p,
	ul,
	li,
	span {
		color: var(--light-text-1);
	}
	.page-title {
		align-self: flex-start;
		margin-bottom: 2%;
	}
	.section-heading {
		margin: 0 0 1rem 0.1rem;
	}
	.text-section-container {
		width: clamp(300px, 75vw, 600px);
		margin-bottom: 2rem;
	}

	.resource-list {
		padding: 0.25rem;
		margin: 0;
		list-style: none;
	}

	.resource-sublist li {
		background-image: url("/static/images/design/lnr-chevron-right-circle.svg");
		background-repeat: no-repeat;
		background-position: left top;
	}
	.resource-list-item {
		width: 100%;
		padding: 0.25rem;
		padding-left: 1.25rem;
		margin: 0.25rem 0rem;
		border-radius: 3px;
		list-style-type: none;
		background: url("/static/images/design/lnr-chevron-right-circle.svg");
		background-repeat: no-repeat;
		background-position: 5px center;
	}
	.resource-sublist-container {
		background-image: none;
	}
	/* .resource-list-item::marker {
		content: url("/static/images/design/lnr-chevron-right-circle.svg");
	} */
	.resource-list-item:hover {
		background-color: var(--color-3);
		transition: all 0.2s ease-in-out;
	}

	.resource-list-item a {
		position: relative;
		display: block;
		padding-left: 0.75rem;
		border: none;
		z-index: 5;
	}
	.resource-list-item:hover a {
		color: var(--dark-background-text);
	}

	.resource-list-item:hover .resource-list-item {
		border-radius: 3px;
		background-image: url("/static/images/design/lnr-chevron-right-circle-white.svg");
		background-position: 5px center;
		background-color: var(--color-5);
	}
	.resource-list-item:hover .resource-list-item a {
		color: var(--dark-text-1);
	}
	.resource-list-item .resource-list-item:hover {
		opacity: 0.7;
	}

	@media screen and (max-width: 480px) {
		main {
			padding: 15% 10% 10% 10%;
		}
		.page-title {
			text-align: center;
		}
		.section-heading {
			align-self: center;
		}
	}
</style>
