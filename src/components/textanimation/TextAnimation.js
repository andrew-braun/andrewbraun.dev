import React from "react"
import styles from "./textanimation.module.css"

export default function TextAnimation(props) {
	const { text, animation } = props
	return <span className={styles.textAnimation}>{text}</span>
}
