import React from 'react'

const Testimonial = ({
  name = "",
  description = "",
  image = {}
}) => {
  return (
  <div className={`testimonial ${name}`}>
    <img src={image.fields ? image.fields.file.url : ''} className="testimonial-img" alt={`testimonial from ${name}`}/>
    <h4 className="testimonial-name">{name}</h4>
    <p className="testimonial-description">{description}</p>
  </div>
)}

export default Testimonial
