import React from "react"
import "../../styles/global.css"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import styles from "./layout.module.css"

export default function Layout({ children }) {
<<<<<<< HEAD
	return <div className={styles.siteLayout}>{children}</div>
=======
	return (
		<div className={styles.siteLayout}>
			<Header />
			<div className={styles.mainContent}>{children}</div>
			<Footer />
		</div>
	)
>>>>>>> e08df9021e7f42b212199dd41ee3ceeee11489f2
}
