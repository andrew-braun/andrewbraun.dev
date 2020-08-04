import React from "react"
import styles from "./hero.module.css"

export default function Hero() {
    return (
        <div className={styles.hero}>
            <h2 className={styles.heroHeader}>
                Andrew Braun
            </h2>
            <p className={styles.heroText}>
                makes websites,
            </p>
            <p className={styles.heroText}>
                writes about tech,
            </p>
            <p className={styles.heroText}>
                plays with data,
            </p>
            <p className={styles.heroText}>
                and does other nerd things.
            </p>
        </div>
    )
}