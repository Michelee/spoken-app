import React from 'react'
import FacebookIcon from '../icons/facebook-icon'
import InstagramIcon from '../icons/instagram-icon'
import TwitterIcon from '../icons/twitter-icon'
import Logo from '../icons/logo'

import '../../styles/components/ui/_footer.scss'

const Footer = () => (
  <div className="footer">
    <div className="contact-container">
      <h2>Let’s keep in touch</h2>

      <div className="contact-form">
        <input type="text" placeholder="Enter your email to subscribe" />
        <button>Submit</button>
      </div>
    </div>
    <div className="inline-text">
      <small>All Rights Reserved By WBS. ORG</small>
      <Logo />
      <div className="social-media">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </div>
  </div>    
)

export default Footer;
