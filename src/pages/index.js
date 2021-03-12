import { useAnimation } from "framer-motion"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import FadeIn from "../components/animations/fadein/FadeIn"
import Hero from "../components/hero/Hero"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import SocialButtons from "../components/socialbuttons/SocialButtons"
import "../styles/global.css"
import styles from "./index.module.css"

export default function Home() {
	const controls = useAnimation()
	const [contactRef, inView] = useInView()

	useEffect(() => {
		if (inView) {
			controls.start("visible")
		}
	}, [controls, inView])
	return (
		<Layout>
			<SEO title="Home" />
			<main className={styles.homeMain}>
				<div className={styles.homeEntry}>
					<div className={styles.heroContainer}>
						<Hero />
					</div>
					<div className={styles.contactContainer}>
						<h2 className={styles.contactSubHeading}>About Me</h2>
						<div className={styles.contactSections}>
							<div className={styles.socialContainer}>
								<FadeIn delay="0.1" duration="0.7">
									<SocialButtons />
								</FadeIn>
							</div>
							<div className={styles.contactAboutContainer}>
								<FadeIn
									className={styles.contactAbout}
									delay="0.1"
									duration="0.7"
								>
									<div className={styles.contactAbout}>
										<p>
											I'm a JS/React/WordPress web developer building everything
											from custom web apps to easily-manageable WordPress sites.
											Need something created, fixed, or overhauled? Let's talk!
										</p>
										<p>
											My primary passions are learning and building things, so I
											spend a lot of my free time coding and working on personal
											projects, like{" "}
											<a
												href="https://geobeermap.com"
												rel="noreferrer noopener"
											>
												a website about craft beer in Georgia{" "}
											</a>
											or{" "}
											<a href="https://andrew-braun.github.io/hangtree-game/">
												a plant-based alternative to hangman
											</a>
											.
										</p>
										<p>
											I've been playing with tech and making sites since the
											early 2000s, but I studied history in university, and
											since then I've worked as a as a developer, teacher,
											writer, and chatbot designer while living around the world
											in places like Korea, Thailand, Georgia, and, of course,
											my native USA.
										</p>
										{/* prettier-ignore */}
										<p>

									So let me know what I can do for you! You can reach me
									via <a href="mailto:andrew@andrewbraun.dev">email</a>,
									<a href="https://twitter.com/braunecon">&nbsp;Twitter</a>,
									<a href="https://facebook.com/andrewbraun.dev">&nbsp;Facebook</a>, or
									<a href="https://linkedin.com/in/andrewwestonbraun">
										&nbsp;LinkedIn
									</a>
									. If you want to check out my work, you can find it on
									<a href="https://github.com/andrew-braun">&nbsp;GitHub&nbsp;</a>
									or
									<a href="https://codepen.io/andrewbraun">&nbsp;CodePen</a>.
								</p>
									</div>
								</FadeIn>
							</div>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	)
}
