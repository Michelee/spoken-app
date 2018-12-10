import React from 'react'
import FlyingPhone from '../../images/flying-phone.png'

import '../../styles/components/index/_main-section.scss'

const MainSection = ({title, subtitle}) => (
  <div className="main-section-container" id="home">
    <div className="content">
      <h1>Welcome to <strong>Spoken App</strong></h1>
      <p>{subtitle}</p>
      <div className="inline-buttons">
        <a className="white-btn btn">Get App</a>
        <a className="transparent-btn btn">Discover More</a>
      </div>
    </div>
    <img className="flying-phone" src={FlyingPhone} alt="phone" />
  </div>
)

export default MainSection;
