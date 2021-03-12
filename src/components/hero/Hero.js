import React from "react"
import {
	DiCss3,
	DiGit,
	DiHtml5,
	DiJavascript1,
	DiPhotoshop,
	DiPhp,
	DiPostgresql,
	DiPython,
	DiReact,
	DiVisualstudio,
	DiWordpress,
} from "react-icons/di"
import { GrGatsbyjs } from "react-icons/gr"
import {
	SiFigma,
	SiRaspberrypi,
	SiWebpack,
	SiWoocommerce,
} from "react-icons/si"
import "../../fonts/typography.css"
import "../../styles/global.css"
import TextAnimation from "../animations/textanimation/TextAnimation"
import styles from "./hero.module.css"

/*
const iconList = [
	{
		icon: <DiJavascript1 />,
		color: "hsla(52, 84%, 63%, 1)",
		alt: "JavaScript",
	},
	{
		icon: <DiReact />,
		color: "hsla(192, 95%, 68%, 1)",
		alt: "React",
	},
	{
		icon: <DiHtml5 />,
		color: "hsla(18, 88%, 55%, 1)",
		alt: "HTML5",
	},
	{
		icon: <DiCss3 />,
		color: "hsla(207, 100%, 42%, 1)",
		alt: "CSS3",
	},
	{
		icon: <DiWordpress />,
		color: "hsla(192, 95%, 68%, 1)",
		alt: "WordPress",
	},
	{
		icon: <GrGatsbyjs />,
		color: "hsla(0, 0%, 100%, 0.8)",
		alt: "Gatsby",
	},
	{
		icon: <DiPython />,
		color: "hsla(192, 95%, 68%, 1)",
		alt: "Python",
	},
	{
		icon: <DiPostgresql />,
		color: "hsla(192, 95%, 68%, 1)",
		alt: "PostgreSQL",
	},
	{
		icon: <DiGit />,
		color: "hsla(0, 0%, 100%, 0.8)",
		alt: "Git",
	},
	{
		icon: <DiPhotoshop />,
		color: "hsla(210, 95%, 77%, 1)",
		alt: "Photoshop",
	},

	{
		icon: <SiFigma />,
		color: "hsla(18, 88%, 55%, 1)",
		alt: "Figma",
	},

	{
		icon: <DiVisualstudio />,
		color: "hsla(207, 100%, 42%, 1)",
		alt: "VSCode",
	},

	{
		icon: <DiPhp />,
		color: "hsla(207, 100%, 42%, 1)",
		alt: "PHP",
	},

	{
		icon: <SiWebpack />,
		color: "hsla(207, 100%, 42%, 1)",
		alt: "Webpack",
	},
	{
		icon: <SiWoocommerce />,
		color: "hsla(312, 26%, 47%, 1)",
		alt: "WooCommerce",
	},

	{
		icon: <SiRaspberrypi />,
		color: "hsla(312, 26%, 47%, 1)",
		alt: "RaspberryPi",
	},
]
*/

export default function Hero() {
	return (
		<div className={styles.hero}>
			<div className={styles.heroText}>
				<span className={styles.heroTextUnit} id={styles.heroTextUnit1}>
					<TextAnimation
						text="DESIGN"
						animate={{ opacity: [0, 1] }}
						transition={{ duration: 0.7 }}
					/>
				</span>
				<span className={styles.heroTextUnit} id={styles.heroTextUnit2}>
					<TextAnimation
						text="DEVELOP"
						animate={{ opacity: [0, 1] }}
						transition={{ duration: 0.7, delay: 0.7 }}
					/>
				</span>
				<span className={styles.heroTextUnit} id={styles.heroTextUnit3}>
					<TextAnimation
						text="DEPLOY"
						animate={{ opacity: [0, 1] }}
						transition={{ duration: 0.7, delay: 1.4 }}
					/>
				</span>
			</div>
		</div>
	)
}
