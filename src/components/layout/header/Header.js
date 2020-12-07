import React from "react"
import "../../styles/global.css"
import Nav from "./nav/Nav"
import Logo from "./logo/Logo.js"
import "../../styles/global.css"
import styles from "./header.module.css"

export default function Header() {
	return (
		<div className={styles.siteLayout}>
			<header className={styles.mainHeader}>
				<div className={styles.mainHeaderLogo}>
					<Logo />
				</div>
				<Nav />
			</header>
		</div>
	)
}
