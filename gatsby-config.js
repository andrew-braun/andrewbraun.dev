const path = require(`path`)

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/gatsby-config.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}