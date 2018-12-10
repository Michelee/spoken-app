import React from 'react'
import Layout from '../components/layout'
import BackgroundContainer from '../components/backgroundContainer'
import CoachOverview from '../components/coachOverview'
import CoachesTestimonials from '../components/coachesTestimonials'
import Questions from '../components/questions'
import StartCoaching from '../components/startCoaching'
import Footer from '../components/footer'
import '../styles/pages/become-coach.scss'

const BecomeACoach = ({data}) => {
  const node = data.allContentfulCoach.edges[0].node
  const testimonials = data.allContentfulCoachTestimonials.edges
  const footer = data.allContentfulFooter.edges[0].node
  return (
  <Layout>
    <BackgroundContainer 
      {...node}
    />
    <CoachOverview 
      {...node}
    />
    <CoachesTestimonials
      {...node}
      testimonials={testimonials}
    />
    <Questions 
      {...node}
    />
    <StartCoaching 
      {...node}
    />
    <Footer
      {...footer}
    />
  </Layout>
)}

export const pageQuery = graphql`
  query pageQuery {
    allContentfulCoach {
      edges {
        node {
          mainTitle
          mainTitleBold
          mainDescription
          overviewTitle
          overviewDescription
          benefit1title
          benefit1description
          benefit2title
          benefit2description
          benefit3title
          benefit3description
          benefit4title
          benefit4description
          testimonialsTitle
          questionsTitle
          questionsDescription
          becomeCoachLink
          startCoachingLink
          discoverMoreLink
          lookingForwardTitle
        }
      }
    }
    allContentfulCoachTestimonials {
      edges {
        node {
          name
          description
          image {
            fixed(width: 750) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
    allContentfulFooter {
      edges {
        node {
          copyright
          twitter
          facebook
          instagram
        }
      }
    }
  }
`

export default BecomeACoach