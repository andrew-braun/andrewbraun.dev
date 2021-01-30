import React from "react"
import InfoImage from "../infoimage/InfoImage"
import { DiJavascript1 } from "react-icons/di"
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
					icon2={<DiJavascript1 />}
					icon3={<DiJavascript1 />}
					icon4={<DiJavascript1 />}
					icon5={<DiJavascript1 />}
					icon6={<DiJavascript1 />}
					icon7={<DiJavascript1 />}
					icon8={<DiJavascript1 />}
				/>
			</div>
		</div>
	)
}
