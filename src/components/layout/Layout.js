import React from "react"
import "../../styles/global.css"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import styles from "./layout.module.css"

export default function Layout({ children }) {
	return <div className={styles.siteLayout}>{children}</div>
}
