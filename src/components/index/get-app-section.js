import React from 'react'
import PhoneImg from '../../images/phone-img.png'
import AppStoreIcon from '../icons/app-store-icon'
import '../../styles/components/index/_get-app-section.scss'

const GetAppSection = ({getAppTitle, getAppParagraph, getAppLink}) => (
  <div className="get-app-section-container" id="contact" offset={150}>
    <div className="left-container">
      <img src={PhoneImg} alt="phone-img" />
    </div>
    <div className="right-container">
      <h2>{getAppTitle}</h2>
      <p>{getAppParagraph}</p>
      <a href={getAppLink}>
        <AppStoreIcon />
      </a>
    </div> 
  </div>
)

export default GetAppSection;
