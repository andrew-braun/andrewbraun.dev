import { motion, useAnimation } from "framer-motion"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import "../../../styles/global.css"
import styles from "./slidein.module.css"

export default function SlideIn({ children, direction }) {
	const controls = useAnimation()
	const [motionRef, inView] = useInView()

	const slideDirection = direction === "right" ? 400 : -400
	console.log(slideDirection)

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
			transition={({ duration: 0.5 }, { type: "spring", stiffness: "70" })}
			ref={motionRef}
			variants={{
				visible: { translateX: 0 },
				hidden: { translateX: slideDirection },
			}}
		>
			{children}
		</motion.div>
	)
}
