import React from 'react'
import Slider from 'react-slick'
import QuoteIcon from '../icons/quote-icon'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/components/ui/_slider.scss'
import '../../styles/components/index/_testimonials-section.scss'

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const TestimonialsSection = ({ testimonialsTitle, testimonialsParagraph, testimonials}) => (
  <div className='testimonials-section-container' id='testimonials' offset={150}>
    <div className='container'>
      <h2>{testimonialsTitle}</h2>
      <p>{testimonialsParagraph}</p>
        {
          testimonials.length
          ? <div className='testimonials-container'>
            <Slider {...settings}>
            {
              testimonials.map(({ fields }, index) => (
                <div className='testimonial-box' key={index}>
                  <QuoteIcon />
                  <p>{fields.testimonial}</p>
                  <div className='inline-items'>
                    <img src={fields.image ? fields.image.fields.file.url : ''} alt="img" />
                    <strong>{fields.name}</strong>
                  </div>
                </div>
              ))
            }
            </Slider>
          </div>
          : ''
        }
    </div>  
  </div>
)

export default TestimonialsSection;
