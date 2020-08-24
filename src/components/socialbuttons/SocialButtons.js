import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { SiCodepen as CodePenIcon, SiGithub as GitHubIcon, SiFacebook as FacebookIcon, SiTwitter as TwitterIcon, SiLinkedin as LinkedInIcon } from "react-icons/si"
import styles from "./socialbuttons.module.css"

export default function SocialButtons() {
	const data = useStaticQuery(graphql`
		query SocialQuery {
			allSocialInfoJson {
				edges {
					node {
						codepen {
							link
							name
						}
						github {
							link
							name
						}
						facebook {
							link
							name
						}
						linkedin {
							link
							name
						}
						twitter {
							link
							name
						}
					}
				}
			}
		}
	`)

	const socialArray = Object.values(data.allSocialInfoJson.edges[0].node)
	const socialElements = socialArray.map(item => {
		return (
			<div className={styles.socialButton} key={`${item.name}-button`}>
				<a href={item.link} alt={item.name}
				className={styles.socialLink}>
					{
						(item.name === "Facebook") ? <span className={styles.facebookIcon}> <FacebookIcon /></span> :
						(item.name === "GitHub") ? <span className={styles.githubIcon}><GitHubIcon /></span> :
						(item.name === "CodePen") ? <span className={styles.codepenIcon}><CodePenIcon /></span> :
						(item.name === "Twitter") ? <span className={styles.twitterIcon}><TwitterIcon /></span> :
						(item.name === "LinkedIn") ? <span className={styles.linkedinIcon}><LinkedInIcon /></span> : null
					}
				</a>
			</div>
		)
	})

	// const {
	// 	facebook,
	// 	codepen,
	// 	github,
	// 	linkedin,
	// 	twitter,
	// } = data.allSocialInfoJson.edges[0].node

	return (
		<div className={styles.socialButtons}>
			{socialElements}
		</div>
	)
}
