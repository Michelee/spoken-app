import React, { Fragment, Component } from 'react'
import Header from '../components/ui/header'
import Layout from '../components/layout'
import MainSection from '../components/index/main-section'
import OverviewSection from '../components/index/overview-section'
import TestimonialsSection from '../components/index/testimonials-section'
import GetAppSection from '../components/index/get-app-section'
import Footer from '../components/ui/footer'
import {
  fetchFooter,
  fetchHomePage,
  fetchTestimonialsHomePage
} from '../api'

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeContent: {},
      testimonialsItems: [],
      footerContent: {}
    }
  }

  componentDidMount() {
    Promise.all([
      fetchHomePage(),
      fetchTestimonialsHomePage(),
      fetchFooter()
    ]).then(([fetchHomePage, fetchTestimonialsHomePage, fetchFooter]) => {
      this.setState({
        homeContent: fetchHomePage.items[0].fields,
        testimonialsItems: fetchTestimonialsHomePage.items,
        footerContent: fetchFooter.items[0].fields
      })
    })
  }

  render () {
    const { homeContent, testimonialsItems, footerContent } = this.state;
    return (
      <Fragment>
        <Header />
        <Layout
          description="Bible School"
          keywords="Bible, Spoken App"
        >
          <MainSection {...homeContent} />
          <OverviewSection {...homeContent} />
          <TestimonialsSection
            {...homeContent}
            testimonials={testimonialsItems}
          />
          <GetAppSection {...homeContent}/>
          <Footer
            {...homeContent}
            footer={footerContent}
          />
        </Layout>
      </Fragment>
    )
  }
}

export default IndexPage
