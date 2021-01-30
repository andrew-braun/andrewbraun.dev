import React from "react"
import "../../styles/global.css"
import styles from "./infoimage.module.css"

export default function Hero(props) {
	const {
		icon1,
		icon2,
		icon3,
		icon4,
		icon5,
		icon6,
		icon7,
		icon8,
		icon9,
		icon10,
		icon11,
		icon12,
		icon13,
		icon14,
		icon15,
		icon16,
	} = props
	const {
		icon1Color,
		icon2Color,
		icon3Color,
		icon4Color,
		icon5Color,
		icon6Color,
		icon7Color,
		icon8Color,
		icon9Color,
		icon10Color,
		icon11Color,
		icon12Color,
		icon13Color,
		icon14Color,
		icon15Color,
		icon16Color,
	} = props

	const {
		icon1Alt,
		icon2Alt,
		icon3Alt,
		icon4Alt,
		icon5Alt,
		icon6Alt,
		icon7Alt,
		icon8Alt,
		icon9Alt,
		icon10Alt,
		icon11Alt,
		icon12Alt,
		icon13Alt,
		icon14Alt,
		icon15Alt,
		icon16Alt,
	} = props
	return (
		<div className={styles.infoImageContainer}>
			<div className={styles.background}>
				<div className={styles.iconContainer}>
					<div
						className={styles.icon}
						style={{ color: `${icon1Color}` }}
						title={icon1Alt}
					>
						{icon1}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon2Color}` }}
						title={icon2Alt}
					>
						{icon2}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon1Color}` }}
						title={icon1Alt}
					>
						{icon3}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon1Color}` }}
						title={icon1Alt}
					>
						{icon4}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon1Color}` }}
						title={icon1Alt}
					>
						{icon5}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon1Color}` }}
						title={icon1Alt}
					>
						{icon6}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon1Color}` }}
						title={icon1Alt}
					>
						{icon7}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon1Color}` }}
						title={icon1Alt}
					>
						{icon8}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon1Color}` }}
						title={icon1Alt}
					>
						{icon9}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon1Color}` }}
						title={icon1Alt}
					>
						{icon10}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon1Color}` }}
						title={icon1Alt}
					>
						{icon11}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon1Color}` }}
						title={icon1Alt}
					>
						{icon12}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon1Color}` }}
						title={icon1Alt}
					>
						{icon13}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon1Color}` }}
						title={icon1Alt}
					>
						{icon14}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon1Color}` }}
						title={icon1Alt}
					>
						{icon15}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon1Color}` }}
						title={icon1Alt}
					>
						{icon16}
					</div>
				</div>
			</div>
		</div>
	)
}
