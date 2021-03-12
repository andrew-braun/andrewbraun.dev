import { motion, useAnimation } from "framer-motion"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import "../../../styles/global.css"
import * as styles from "./fadein.module.css"

export default function FadeIn({ children, delay, duration }) {
	const controls = useAnimation()
	const [motionRef, inView] = useInView()

	useEffect(() => {
		if (inView) {
			controls.start("visible")
		}
	}, [controls, inView])

	return (
		<div className={styles.motionDivWrapper} ref={motionRef}>
			<motion.div
				className={styles.motionContainer}
				animate={controls}
				initial="hidden"
				variants={{
					visible: {
						opacity: 1,
						transition: {
							delay: delay,
							duration: duration,
							ease: "easeIn",
						},
					},
					hidden: { opacity: 0 },
				}}
			>
				{children}
			</motion.div>
		</div>
	)
}
