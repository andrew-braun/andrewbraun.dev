import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import {
	RiMailSendLine as EmailIcon,
	RiStackshareLine as StackShareIcon,
} from "react-icons/ri"
import {
	SiCodepen as CodePenIcon,
	SiCodewars as CodewarsIcon,
	SiFacebook as FacebookIcon,
	SiGithub as GitHubIcon,
	SiLinkedin as LinkedInIcon,
	SiTwitter as TwitterIcon,
	SiUdemy as UdemyIcon,
} from "react-icons/si"
import styles from "./socialbuttons.module.css"

const components = {
	CodePenIcon: CodePenIcon,
	EmailIcon: EmailIcon,
	StackShareIcon: StackShareIcon,
	CodewarsIcon: CodewarsIcon,
	FacebookIcon: FacebookIcon,
	GitHubIcon: GitHubIcon,
	LinkedInIcon: LinkedInIcon,
	TwitterIcon: TwitterIcon,
	UdemyIcon: UdemyIcon,
}

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
						stackshare {
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
						udemy {
							link
							name
						}
						codewars {
							link
							name
						}
						email {
							link
							name
						}
					}
				}
			}
		}
	`)

	const socialArray = Object.values(data.allSocialInfoJson.edges[0].node)
	const socialElementList = socialArray.map(item => {
		console.log(item.name)
		const Icon = components[`${item.name}Icon`]
		console.log(components[`${item.name}Icon`])
		return (
			<div className={styles.socialButton} key={`${item.name}-button-key`}>
				<a href={item.link} alt={item.name} className={styles.socialLink}>
					<span className={`styles.${item.name}Icon`}>
						<Icon />
					</span>
					<span class={styles.socialButtonLabel}>{item.name}</span>
				</a>
			</div>
		)
	})

	const socialElements = socialArray.map(item => {
		return (
			<div className={styles.socialButton} key={`${item.name}-button`}>
				<a href={item.link} alt={item.name} className={styles.socialLink}>
					{item.name === "Facebook" ? (
						<span className={styles.facebookIcon}>
							<FacebookIcon />
						</span>
					) : item.name === "GitHub" ? (
						<span className={styles.githubIcon}>
							<GitHubIcon />
						</span>
					) : item.name === "CodePen" ? (
						<span className={styles.codepenIcon}>
							<CodePenIcon />
						</span>
					) : item.name === "Twitter" ? (
						<span className={styles.twitterIcon}>
							<TwitterIcon />
						</span>
					) : item.name === "LinkedIn" ? (
						<span className={styles.linkedinIcon}>
							<LinkedInIcon />
						</span>
					) : item.name === "StackShare" ? (
						<span className={styles.stackShareIcon}>
							<StackShareIcon />
						</span>
					) : item.name === "Udemy" ? (
						<span className={styles.socialIcon}>
							<UdemyIcon />
						</span>
					) : item.name === "Codewars" ? (
						<span className={styles.codewarsIcon}>
							<CodewarsIcon />
						</span>
					) : item.name === "Email" ? (
						<span className={styles.emailIcon}>
							<EmailIcon />
						</span>
					) : null}
					<span class={styles.socialButtonLabel}>{item.name}</span>
				</a>
			</div>
		)
	})

	return <div className={styles.socialButtons}>{socialElementList}</div>
}
