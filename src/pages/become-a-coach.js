import React from 'react'
import Layout from '../components/layout'
import BackgroundContainer from '../components/backgroundContainer'
import CoachOverview from '../components/coachOverview'
import CoachesTestimonials from '../components/coachesTestimonials'
import Questions from '../components/questions'
import StartCoaching from '../components/startCoaching'
import Footer from '../components/footer'
import Spinner from '../components/ui/spinner'
import '../styles/pages/become-coach.scss'
import {
  fetchCoachPage,
  fetchTestimonials,
  fetchFooter
} from '../api'

class BecomeACoach extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coachPage: {},
      testimonials: [],
      footer: {},
      loading: true
    }
  }

  componentDidMount() {
    Promise.all([
      fetchCoachPage(),
      fetchTestimonials(),
      fetchFooter()
    ]).then(([coachPage, testimonials, footer]) => {
      this.setState({
        coachPage: coachPage.items[0].fields,
        testimonials: testimonials.items,
        footer: footer.items[0].fields,
        loading: false
      })
    }).catch(error => {
      this.setState({ loading: false })
    })
  }

  render() {
    const { testimonials, coachPage, footer, loading } = this.state
    let page = (
      <Layout>
        <BackgroundContainer 
          {...coachPage}
        />
        <CoachOverview 
          {...coachPage}
        />
        <CoachesTestimonials
          {...coachPage}
          testimonials={testimonials}
        />
        <Questions 
          {...coachPage}
        />
        <StartCoaching 
          {...coachPage}
        />
        <Footer
          {...footer}
        />
      </Layout>
    )

    if (loading) {
      page = <Spinner />
    }
    return page
  }
}

export default BecomeACoach
