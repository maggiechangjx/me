/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/me",
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `http://www.maggiechang.space/`
  },
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-sharp", 
    "gatsby-plugin-smoothscroll",
    "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images",
    },
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",
    
      /* Plugin options */
      options: {
        /* Font loading mode */
        mode: "async",
        /* Enable font loading listener to handle FOUT */
        enableListener: true,
        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ["https://fonts.gstatic.com"],
        /* Web fonts. File link should point to font CSS file. */
        web: [{
            /* Exact name of the font as defied in @font-face CSS rule */
            name: "Plus Jakarta Sans",
            name: "Inter Tight",
            /* URL to the font CSS file with @font-face definition */
            file: "https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Plus+Jakarta+Sans:ital,wght@0,400;0,600;1,400&display=swap",
          },
        ],
      },
    }
  ]
};