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
					icon2Color="hsla(52, 84%, 63%, 1)"
					icon2Alt="JavaScript"
					icon3={<DiWordpress />}
					icon3Color="hsla(52, 84%, 63%, 1)"
					icon4={<DiHtml5 />}
					icon4Color="hsla(52, 84%, 63%, 1)"
					icon4Alt="JavaScript"
					icon5={<DiCss3 />}
					icon5Color="hsla(52, 84%, 63%, 1)"
					icon5Alt="JavaScript"
					icon6={<GrGatsbyjs />}
					icon6Color="hsla(52, 84%, 63%, 1)"
					icon6Alt="JavaScript"
					icon7={<DiPython />}
					icon7Color="hsla(52, 84%, 63%, 1)"
					icon7Alt="JavaScript"
					icon8={<DiPostgresql />}
					icon8Color="hsla(52, 84%, 63%, 1)"
					icon8Alt="JavaScript"
					icon9={<DiGit />}
					icon9Color="hsla(52, 94%, 63%, 1)"
					icon9Alt="JavaScript"
					icon10={<DiPhotoshop />}
					icon10Color="hsla(52, 104%, 63%, 1)"
					icon10Alt="JavaScript"
					icon11={<SiFigma />}
					icon11Color="hsla(52, 84%, 63%, 1)"
					icon11Alt="JavaScript"
					icon12={<DiVisualstudio />}
					icon12Color="hsla(52, 84%, 63%, 1)"
					icon12Alt="JavaScript"
					icon13={<DiPhp />}
					icon13Color="hsla(52, 84%, 63%, 1)"
					icon13Alt="JavaScript"
					icon14={<SiWebpack />}
					icon14Color="hsla(52, 84%, 63%, 1)"
					icon14Alt="JavaScript"
					icon15={<SiWoocommerce />}
					icon15Color="hsla(52, 84%, 63%, 1)"
					icon15Alt="JavaScript"
					icon16={<SiRaspberrypi />}
					icon16Color="hsla(52, 84%, 63%, 1)"
					icon16Alt="JavaScript"
				/>
			</div>
		</div>
	)
}
