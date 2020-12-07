import React from "react"
<<<<<<< HEAD
import "../../../styles/global.css"
import Nav from "../nav/Nav"
import Logo from "../logo/Logo"
=======
import "../../styles/global.css"
import Nav from "./nav/Nav"
import Logo from "./logo/Logo.js"
import "../../styles/global.css"
>>>>>>> e08df9021e7f42b212199dd41ee3ceeee11489f2
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
