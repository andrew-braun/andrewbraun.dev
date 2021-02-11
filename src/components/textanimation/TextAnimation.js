import React from "react"
import styles from "./textanimation.module.css"

export default function TextAnimation() {
	const { text, animation } = props
	return (
		<span className={styles.heroTextUnit} id={styles.heroTextUnit1}>
			DESIGN
		</span>
	)
}
