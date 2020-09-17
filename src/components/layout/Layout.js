import React from "react"
import "../../styles/global.css"
import Nav from "./nav/Nav"
import Logo from "./logo/Logo.js"
import styles from "./layout.module.css"

export default function Layout({ children }) {
	return (
		<div className={styles.siteLayout}>
			<header className={styles.mainHeader}>
				<div className={styles.mainHeaderLogo}>
					<Logo />
				</div>
                <Nav />
			</header>
			<div className={styles.mainContent}>{children}</div>
		
		</div>
	)
}
