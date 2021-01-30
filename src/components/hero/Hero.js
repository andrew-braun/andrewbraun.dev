import React from "react"
import "../../styles/global.css"
import styles from "./hero.module.css"

export default function Hero() {
	return (
		<div className={styles.hero}>
			<div className={styles.heroText}>
				<span className={styles.heroTextUnit} id={styles.heroTextUnit1}>
					DESIGN
				</span>
				<span className={styles.heroTextUnit} id={styles.heroTextUnit2}>
					DEVELOP
				</span>
				<span className={styles.heroTextUnit} id={styles.heroTextUnit3}>
					DEPLOY
				</span>
			</div>
			<div className={styles.heroBackground}></div>
		</div>
	)
}
