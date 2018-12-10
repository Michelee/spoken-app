import React from 'react'

const Testimonial = ({
    node: {
        name = "",
        description = "",
        image
    }
}) => (
    <div className="testimonial">
        <img src={image.fixed.src} className="testimonial-img" alt={`testimonial from ${name}`}/>
        <h4 className="testimonial-name">{name}</h4>
        <p className="testimonial-description">{description}</p>
    </div>
)

export default Testimonial
