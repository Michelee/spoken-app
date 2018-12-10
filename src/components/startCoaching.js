import React from 'react';
import SectionImage from '../images/startcoachingbg.jpg'
import Button from './ui/button'
const StartCoaching = ({lookingForwardTitle = '', startCoachingLink = ''}) => (
  <section className="StartCoaching">
    <div className="left-column">
      <h2 className="section-title">{lookingForwardTitle}</h2>
      <Button
        url={startCoachingLink}
        text="start coaching"
        addClass="blue"
      />
    </div>
    <div className="right-column">
      <figure>
        <img src={SectionImage} alt="start coaching"/>
      </figure>
    </div>
  </section>
)

export default StartCoaching
