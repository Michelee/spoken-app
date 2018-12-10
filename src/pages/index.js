import React, { Fragment } from 'react'

import Header from '../components/ui/header'
import Layout from '../components/layout'
import MainSection from '../components/index/main-section'
import OverviewSection from '../components/index/overview-section'
import TestimonialsSection from '../components/index/testimonials-section'
import GetAppSection from '../components/index/get-app-section'
import Footer from '../components/ui/footer'

const IndexPage = ({data}) => {
  const node = data.allContentfulHomePage.edges[0].node

  return (
    <Fragment>
      <Header />
      <Layout>
        <MainSection {...node} />
        <OverviewSection {...node} />
        <TestimonialsSection {...node} />
        <GetAppSection {...node} />
        <Footer {...node} />
      </Layout>
    </Fragment>
  )
}

export const pageQueryIndex = graphql`
  query pageQueryIndex {
    allContentfulHomePage {
      edges {
        node {
          title
          subtitle
          overviewTitle
          overviewParagraph
          benefitTitle1
          benefitDesc1
          benefitTitle2
          benefitDesc2
          benefitTitle3
          benefitDesc3
          testimonialsTitle
          testimonialsParagraph
          getAppTitle
          getAppParagraph
          contactTitle
        }
      }
    }
  }
`

export default IndexPage
