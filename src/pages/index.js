import { motion } from "framer-motion"
import React from "react"
import Hero from "../components/hero/Hero"
import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import SocialButtons from "../components/socialbuttons/SocialButtons"
import "../styles/global.css"
import styles from "./index.module.css"

export default function Home() {
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
							<motion.div
								className={styles.socialContainer}
								animate={{ opacity: [0, 1] }}
								transition={{ duration: 1 }}
							>
								<SocialButtons />
							</motion.div>
							<div className={styles.contactAbout}>
								<p>
									I'm a JS/React/WordPress web developer, which means I'm always
									learning and experimenting! I love staying up-to-date with the
									latest web tech and deploying speedy, modern sites--and I'm
									not just saying that ;) Whether you need a web app
									custom-built from the ground up or a WordPress system set up,
									I can help you out!
								</p>
								<p>
									I've been playing with tech and making sites since the early
									2000s, but I studied history in university, and since then
									I've worked as a as a developer, teacher, writer, and chatbot
									designer while living around the world in places like Korea,
									Thailand, Georgia, and, of course, my native USA.
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
						</div>
					</div>
				</div>
			</main>
		</Layout>
	)
}
