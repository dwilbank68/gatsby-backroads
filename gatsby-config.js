/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-transition-link`,
        `gatsby-plugin-playground`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                host: `https://backroads-wilbanks.netlify.com`,
                sitemap: `https://backroads-wilbanks.netlify.com/sitemap.xml`,
                policy: [{userAgent:"*", allow: "/"}]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`
            }
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        }
    ],
    siteMetadata: {
        title: "BackRoads",
        description: "Explore awesome tours",
        author: "@johndoe",
        twitterUsername:'@john_doe',
        image: '/defaultBcg.jpeg',
        siteUrl: 'https://backroads-wilbanks.netlify.com'
    }
}
