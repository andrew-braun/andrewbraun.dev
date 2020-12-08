import React from "react"
import { Link } from "gatsby"
import Nav from "../nav/Nav"
import Logo from "../logo/Logo.js"
import "../../../styles/global.css"
import styles from "./header.module.css"

export default function Header() {
	return (
		<div className={styles.siteLayout}>
			<header className={styles.mainHeader}>
				<div className={styles.mainHeaderLogo}>
					{/* <Logo /> */}
					<Link to="/">AndrewBraun.dev</Link>
				</div>
				<Nav />
			</header>
		</div>
	)
}
