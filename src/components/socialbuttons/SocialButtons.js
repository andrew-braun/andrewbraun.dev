import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { DiGithubBadge } from "react-icons/di"
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

	const {
		facebook,
		codepen,
		github,
		linkedin,
		twitter,
	} = data.allSocialInfoJson.edges[0].node

	return (
		<div className={styles.socialButtons}>
            { github.link !== null ?
                <div className={styles.socialButton}>
                    <a href={github.link} alt={github.name} className={styles.socialLink}><DiGithubBadge /></a>
                </div> : null
            }
		</div>
	)
}
