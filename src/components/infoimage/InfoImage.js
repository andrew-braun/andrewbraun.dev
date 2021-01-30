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
						style={{ color: `${icon3Color}` }}
						title={icon3Alt}
					>
						{icon3}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon4Color}` }}
						title={icon4Alt}
					>
						{icon4}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon5Color}` }}
						title={icon5Alt}
					>
						{icon5}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon6Color}` }}
						title={icon6Alt}
					>
						{icon6}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon7Color}` }}
						title={icon7Alt}
					>
						{icon7}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon8Color}` }}
						title={icon8Alt}
					>
						{icon8}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon9Color}` }}
						title={icon9Alt}
					>
						{icon9}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon10Color}` }}
						title={icon10Alt}
					>
						{icon10}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon11Color}` }}
						title={icon11Alt}
					>
						{icon11}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon12Color}` }}
						title={icon12Alt}
					>
						{icon12}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon13Color}` }}
						title={icon13Alt}
					>
						{icon13}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon14Color}` }}
						title={icon14Alt}
					>
						{icon14}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon15Color}` }}
						title={icon15Alt}
					>
						{icon15}
					</div>
					<div
						className={styles.icon}
						style={{ color: `${icon16Color}` }}
						title={icon16Alt}
					>
						{icon16}
					</div>
				</div>
			</div>
		</div>
	)
}
