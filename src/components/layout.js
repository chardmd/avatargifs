import 'normalize.css'
import './layout.css'
import './fonts.css'
import './text.css'
import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          link={[
            {
              rel: 'canonical',
              href: 'https://avatargifs.com',
            },
          ]}
          meta={[
            {
              name: 'description',
              content: 'Free avatar generator.',
            },
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:site',
              content: '@avatargifs',
            },
            {
              name: 'twitter:title',
              content: 'Avatar Gifs',
            },
            {
              name: 'twitter:image',
              content: '',
            },
            {
              name: 'twitter:description',
              content: 'Free avatar generator.',
            },
            {
              name: 'keywords',
              content: 'Avatar, Avatar Generator, Free, Avatars',
            },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:image',
              content: '', //logo
            },
            { property: 'og:title', content: 'Avatar Gifs' },
            { property: 'og:url', content: 'https://avatargifs.com' },
            {
              property: 'og:description',
              content: 'Free avatar generator.',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
