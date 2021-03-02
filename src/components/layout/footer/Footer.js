import React from "react"
import "../../../styles/global.css"
import styles from "./footer.module.css"

export default function Footer() {
	return (
		<footer className={styles.footer}>
			Made with
			<span role="img" aria-label="heart-emoji">
				❤️
			</span>
			by Andrew Braun
		</footer>
	)
}
