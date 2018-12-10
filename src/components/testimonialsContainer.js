import React from 'react'
import Testimonial from './testimonial'

const TestimonialsContainer = ({testimonialsPage}) => {
    return (
    <div className="testimonials-container">
        {
            testimonialsPage.map((item, index) => (
                <Testimonial
                    key={index}
                    {...item}
                />
            ))
        }
    </div>
)}

export default TestimonialsContainer
