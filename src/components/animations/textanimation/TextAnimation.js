import { motion } from "framer-motion"
import React from "react"
import styles from "./textanimation.module.css"

export default function TextAnimation(props) {
	const { text, animate, transition } = props
	return (
		<motion.span
			className={styles.textAnimation}
			animate={animate}
			transition={transition}
			initial={{ opacity: 0 }}
		>
			{text}
		</motion.span>
	)
}
