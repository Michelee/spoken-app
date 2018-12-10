import React from 'react'
import Slider from 'react-slick'
import Img1 from '../../images/foto1.jpg'
import Img2 from '../../images/foto2.jpg'
import Img3 from '../../images/foto3.jpg'
import Img4 from '../../images/foto4.jpg'
import Img5 from '../../images/foto5.jpg'
import QuoteIcon from '../icons/quote-icon'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/components/ui/_slider.scss'

import '../../styles/components/index/_testimonials-section.scss'

const testimonials = [
  {"name": "CHESTER BOWEN", "text": "Thanks yet again for another successful and very popular mobile app.", "image": "../../images/foto1.jpg"},
  {"name": "SUSANA BALIN", "text": "The app was intuitive and well organized. It made helped my english.", "image": "../../images/foto1.jpg"},
  {"name": "JULIE BALIN", "text": "I like the idea of helping and teaching, this seems like a great idea.", "image": "../../images/foto1.jpg"},
  {"name": "JULIE BOWEN", "text": "Thanks yet again for another successful and very popular mobile app.", "image": "../../images/foto1.jpg"},
  {"name": "EVELYN BOWEN", "text": "The app was intuitive and well organized. It made helped my english.", "image": "../../images/foto1.jpg"}
]

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

const TestimonialsSection = () => (
  <div className='testimonials-section-container' id='testimonials' offset={150}>
    <div className='container'>
      <h2>What people are saying</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit donec tempus pellentesque dui vel 
        tristique purus justo vestibulum eget lectus non gravida ultrices</p>
        <div className='testimonials-container'>
          <Slider {...settings}>
          {
            testimonials.map((item, index) => (
              <div className='testimonial-box' key={index}>
                <QuoteIcon />
                <p>{item.text}</p>
                <div className='inline-items'>
                  <img src={item.image} />
                  <strong>{item.name}</strong>
                </div>
              </div>
            ))
          }
          </Slider>
        </div>
    </div>  
  </div>
)

export default TestimonialsSection;
