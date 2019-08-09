// gatsby-config.js
module.exports = {
  plugins: [
    "gatsby-theme-components",
    "gatsby-plugin-mdx",
    "gatsby-plugin-theme-ui",
    "gatsby-theme-projects",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `content`,
        name: `content`,
      },
    },
  ]
}
