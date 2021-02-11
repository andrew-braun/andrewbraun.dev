const path = require(`path`)

module.exports = {
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/gatsby-config.js`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/src/assets/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `fonts`,
				path: `${__dirname}/src/fonts/`,
			},
		},
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data`,
			},
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-preload-fonts`,
	],
	siteMetadata: {
		title: `AndrewBraun.dev`,
		titleTemplate: `%s · Andrew Braun`,
		author: `Andrew Braun`,
		description: `I build fast, modern sites that work.`,
		url: `https://www.andrewbraun.dev`, // No trailing slash allowed!
		image: `/assets/brand/logo.svg`,
		twitterUsername: `@braunecon`,
	},
}
