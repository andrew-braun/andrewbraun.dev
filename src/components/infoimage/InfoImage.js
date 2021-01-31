import React from "react"
import "../../styles/global.css"
import styles from "./infoimage.module.css"

export default function Hero(props) {
	function IconElement(iconObj) {
		return (
			<div
				className={styles.icon}
				style={{ color: `${iconObj.color}` }}
				title={iconObj.alt}
				id={`${iconObj.alt.replace(/\s/g, "-").toLowerCase()}-icon`}
			>
				{iconObj.icon}
			</div>
		)
	}

	const iconList = props.icons.map(icon => {
		return IconElement(icon)
	})

	console.log(`console-icons= ${iconList}`)

	return (
		<div className={styles.infoImageContainer}>
			<div className={styles.background}>
				<div className={styles.iconContainer}>{iconList}</div>
			</div>
		</div>
	)
}
