import React from 'react'
import Slider from './slider'
import Testimonial from './testimonial'

const CoachesTestimonials = ({testimonials, testimonialsTitle = ''}) => {
  return (
    <section className="CoachesTestimonials">
      <h2 className="section-title">{testimonialsTitle}</h2>
      <div className="testimonials-container">
        {
          testimonials.length ? <Slider 
          >
            {
              testimonials.map(({ fields }, index) => <Testimonial {...fields} key={index}/>)
            }
          </Slider>
          : ''
        }
        
      </div>
    </section>
  )}

export default CoachesTestimonials
