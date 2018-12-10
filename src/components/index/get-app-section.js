import React from 'react'
import PhoneImg from '../../images/phone-img.png'
import AppStoreIcon from '../icons/app-store-icon'
import '../../styles/components/index/_get-app-section.scss'

const GetAppSection = () => (
  <div className="get-app-section-container" id="contact" offset={150}>
    <div className="left-container">
      <img src={PhoneImg} alt="phone-img" />
    </div>
    <div className="right-container">
      <h2>Get the app now</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit donec tempus pellentesque dui vel tristique pur.</p>
      <a href="#">
        <AppStoreIcon />
      </a>
    </div> 
  </div>
)

export default GetAppSection;
