import React from "react"
import InfoImage from "../infoimage/InfoImage"
import {
	DiJavascript1,
	DiReact,
	DiWordpress,
	DiHtml5,
	DiCss3,
	DiPython,
	DiPostgresql,
	DiGit,
	DiPhotoshop,
	DiVisualstudio,
	DiPhp,
} from "react-icons/di"
import { GrGatsbyjs, GrGraphQl } from "react-icons/gr"
import {
	SiNextDotJs,
	SiWoocommerce,
	SiRaspberrypi,
	SiFigma,
	SiWebpack,
} from "react-icons/si"
import "../../styles/global.css"

import styles from "./hero.module.css"

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
		icon: <DiCss3 />,
		color: "hsla(207, 100%, 42%, 1)",
		alt: "CSS3",
	},
	{
		icon: <DiHtml5 />,
		color: "hsla(18, 88%, 55%, 1)",
		alt: "HTML5",
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

// iconList.map(icon => {
// 	console.log(`console-iconListMap ${icon.color}`)
// })

export default function Hero() {
	return (
		<div className={styles.hero}>
			<div className={styles.heroText}>
				<span className={styles.heroTextUnit} id={styles.heroTextUnit1}>
					DESIGN
				</span>
				<span className={styles.heroTextUnit} id={styles.heroTextUnit2}>
					DEVELOP
				</span>
				<span className={styles.heroTextUnit} id={styles.heroTextUnit3}>
					DEPLOY
				</span>
			</div>
			<div className={styles.heroImageContainer}>
				<InfoImage icons={iconList} />
			</div>
		</div>
	)
}
