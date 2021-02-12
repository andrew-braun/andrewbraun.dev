import { motion, useAnimation } from "framer-motion"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import "../../../styles/global.css"
import styles from "./slidein.module.css"

export default function SlideIn({ children }) {
	const controls = useAnimation()
	const [motionRef, inView] = useInView()

	useEffect(() => {
		if (inView) {
			controls.start("visible")
		}
	}, [controls, inView])
	return (
		<motion.div
			className={styles.motionContainer}
			animate={controls}
			initial="hidden"
			transition={{ duration: 1 }}
			ref={motionRef}
			variants={{
				visible: { opacity: 1, scale: 1 },
				hidden: { opacity: 0, scale: 0 },
			}}
		>
			{children}
		</motion.div>
	)
}
