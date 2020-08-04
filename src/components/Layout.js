import React from "react"
import { Link } from "gatsby"
import styles from "./layout.module.css"

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <header className={styles.mainHeader}>
                <logo className={styles.mainHeaderLogo}>
                    Logo
                </logo>
                <nav className={styles.mainNav}>
                    <ul className={styles.mainNavList}>
                        <li className={styles.mainNavItem}>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            {children}
            <footer className={styles.mainFooter}>
                Made by Andrew Braun
            </footer>
        </React.Fragment>
    )
}