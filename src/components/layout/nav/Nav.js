import React from "react"
import "../../../styles/global.css"
import  * as styles from "./nav.module.css"

export default function Nav() {
	return (
		<nav className={styles.mainNav}>
			<ul className={styles.mainNavList}>
				<li className={styles.mainNavItem}>
					{/* <Link to="/" className={styles.mainNavLink}>
                        Home
                    </Link> */}
				</li>
			</ul>
		</nav>
	)
}
