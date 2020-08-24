import React from "react"
import { Link } from "gatsby"
import Logo from "../components/logo/Logo.js"
import styles from "./layout.module.css"

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <header className={styles.mainHeader}>
                <div className={styles.mainHeaderLogo}>
                    <Logo />
                </div>
                
                <nav className={styles.mainNav}>
                    <ul className={styles.mainNavList}>
                        <li className={styles.mainNavItem}>
                            <Link 
                                to="/"
                                className={styles.mainNavLink}>
                                Home
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className={styles.mainLayout}>
                {children}
            </main>
            <footer className={styles.mainFooter}>
                Made by Andrew Braun
            </footer>
        </React.Fragment>
    )
}