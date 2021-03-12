import { Link } from "gatsby"
import React from "react"
import "../../../styles/global.css"
import Nav from "../nav/Nav"
import  * as styles from "./header.module.css"

export default function Header() {
	return (
		<div className={styles.siteLayout}>
			<header className={styles.mainHeader}>
				<div className={styles.mainHeaderLogo}>
					<Link to="/">AndrewBraun.dev</Link>
				</div>
				<Nav />
			</header>
		</div>
	)
}
