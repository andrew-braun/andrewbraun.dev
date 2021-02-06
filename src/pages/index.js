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
						<h2 className={styles.contactSubHeading}>Contact Me</h2>
						<div className={styles.socialContainer}>
							<SocialButtons />
						</div>
					</div>
				</div>
			</main>
		</Layout>
	)
}
