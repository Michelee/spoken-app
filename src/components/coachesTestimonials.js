import React from 'react'
import Slider from './slider'
import TestimonialsContainer from './testimonialsContainer'
import _ from 'lodash'

const CoachesTestimonials = ({testimonials, testimonialsTitle = ''}) => {
  const items = _.chunk(testimonials, 3)
  return (
    <section className="CoachesTestimonials">
      <h2 className="section-title">{testimonialsTitle}</h2>
      <Slider 
      >
        {
          items.map((page, index) => <TestimonialsContainer testimonialsPage={page} key={index}/>)
        }
      </Slider>
    </section>
  )}

export default CoachesTestimonials
