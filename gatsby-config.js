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
        preconnect: ["https://fonts.googleapis.com", "https://fonts.gstatic.com"],
        /* Web fonts. File link should point to font CSS file. */
        web: [{
            /* Exact name of the font as defied in @font-face CSS rule */
            /*name: "Inter Tight",*/
            name: "Open Sans",
            name: "Unna",
            /*name: "Playfair Display",*/
            name: "Chakra Petch",
            /*name: "Cinzel Decorative",*/
            /*name: "Gilda Display",*/
            /*name: "Prata",*/
            /*name: "Titillium Web",*/
            name: "Inria Serif",
            /*name: "Piazzolla",*/
            name: "Bitter",
            
            /* URL to the font CSS file with @font-face definition */
            file: "https://fonts.googleapis.com/css2?family=Bitter&family=Chakra+Petch&family=Cinzel+Decorative&family=Inria+Serif:wght@400;700&family=Open+Sans:wght@400;500&family=Piazzolla:opsz@8..30&family=Prata&family=Titillium+Web&family=Unna&display=swap",
          },
        ],
      },
    }
  ]
};