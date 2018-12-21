import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/global.scss'
import '../styles/components/layout.scss'

const Layout = ({ children, title, description, keywords }) => (
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
    render={data => (
      <>
        <Helmet
          title={title ? `${title} | ${data.site.siteMetadata.title}`: data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: keywords }
          ]}
        >
          <meta property='og:locale' content='en_US' />
          <meta property='og:type' content='website' />
          <meta property='og:description' content='Lorem ipsum' />
          <meta property='og:url' content='https://www.worldbibleschool.org/' />
          <meta property='og:site_name' content='Spoken App' />
          <html lang="en" />
        </Helmet>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div className="layout-container">
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
