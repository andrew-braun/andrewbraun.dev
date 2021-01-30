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
				<InfoImage
					icon1={<DiJavascript1 />}
					icon1Color="hsla(52, 84%, 63%, 1)"
					icon1Alt="JavaScript"
					icon2={<DiReact />}
					icon2Color="hsla(192, 95%, 68%, 1)"
					icon2Alt="React"
					icon3={<DiWordpress />}
					icon3Color="hsla(195, 100%, 31%, 1)"
					icon3Alt="WordPress"
					icon4={<DiHtml5 />}
					icon4Color="hsla(18, 88%, 55%, 1)"
					icon4Alt="HTML5"
					icon5={<DiCss3 />}
					icon5Color="hsla(222, 88%, 55%, 1)"
					icon5Alt="CSS3"
					icon6={<GrGatsbyjs />}
					icon6Color="hsla(270, 50%, 40%, 1)"
					icon6Alt="Gatsby"
					icon7={<DiPython />}
					icon7Color="hsla(207, 45%, 49%, 1)"
					icon7Alt="Python"
					icon8={<DiPostgresql />}
					icon8Color="hsla(204, 100%, 32%, 1)"
					icon8Alt="PostgreSQL"
					icon9={<DiGit />}
					icon9Color="hsla(10, 87%, 56%, 1)"
					icon9Alt="Git"
					icon10={<DiPhotoshop />}
					icon10Color="hsla(210, 95%, 77%, 1)"
					icon10Alt="Photoshop"
					icon11={<SiFigma />}
					icon11Color="hsla(148, 100%, 38%, 1)"
					icon11Alt="Figma"
					icon12={<DiVisualstudio />}
					icon12Color="hsla(207, 100%, 42%, 1)"
					icon12Alt="VSCode"
					icon13={<DiPhp />}
					icon13Color="hsla(229, 29%, 64%, 1)"
					icon13Alt="PHP"
					icon14={<SiWebpack />}
					icon14Color="hsla(206, 75%, 43%, 1)"
					icon14Alt="Webpack"
					icon15={<SiWoocommerce />}
					icon15Color="hsla(312, 26%, 47%, 1)"
					icon15Alt="WooCommerce"
					icon16={<SiRaspberrypi />}
					icon16Color="hsla(343, 77%, 44%, 1)"
					icon16Alt="RaspberryPi"
				/>
			</div>
		</div>
	)
}
