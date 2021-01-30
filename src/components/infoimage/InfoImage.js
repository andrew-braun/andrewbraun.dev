import React from "react"
import "../../styles/global.css"
import styles from "./infoimage.module.css"

export default function Hero(props) {
	const { icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8 } = props
	const {
		icon1Color,
		icon2Color,
		icon3Color,
		icon4Color,
		icon5Color,
		icon6Color,
		icon7Color,
		icon8Color,
	} = props
	return (
		<div className={styles.infoImageContainer}>
			<div className={styles.background}>
				<div className={styles.iconContainer}>
					<div className={styles.icon} style={{ color: `${icon1Color}` }}>
						{icon1}
					</div>
					<div className={styles.icon}>{icon1}</div>
					<div className={styles.icon}>{icon1}</div>
					<div className={styles.icon}>{icon1}</div>
					<div className={styles.icon}>{icon1}</div>
					<div className={styles.icon}>{icon1}</div>
					<div className={styles.icon}>{icon1}</div>
					<div className={styles.icon}>{icon1}</div>
				</div>
			</div>
		</div>
	)
}
