module.exports = {
  siteMetadata: {
    title: 'AvatarGifs | Free avatar creator online.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'avatargifs',
        short_name: 'avatargifs',
        start_url: '/',
        background_color: '#5a45ff',
        theme_color: '#5a45ff',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-168810586-1',
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /avatars/,
        },
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        typeName: 'Config',
        path: `./src/data/`,
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-netlify`,
  ],
}
