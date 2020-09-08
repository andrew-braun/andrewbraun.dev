import React from "react"
import "../styles/global.css"
import Layout from "../components/layout/Layout"
import Hero from "../components/hero/Hero"
import styles from "./index.module.css"
import SocialButtons from "../components/socialbuttons/SocialButtons"

export default function Home() {
	return (
		<Layout>
			<main className={styles.homeMain}>
				<div className={styles.homeEntry}>
					<div className={styles.heroContainer}>
						<Hero />
					</div>
					<div className={styles.socialContainer}>
						<SocialButtons />
					</div>
				</div>
			</main>
		</Layout>
	)
}
