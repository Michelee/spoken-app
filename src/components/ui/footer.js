import React from 'react'
import FacebookIcon from '../icons/facebook-icon'
import InstagramIcon from '../icons/instagram-icon'
import TwitterIcon from '../icons/twitter-icon'
import Logo from '../icons/logo'

import '../../styles/components/ui/_footer.scss'

const Footer = ({ contactTitle, footer }) => (
  <div className="footer">
    <div className="contact-container">
      <h2>{contactTitle}</h2>
      <div className="contact-form">
        <input type="text" placeholder="Enter your email to subscribe" />
        <button>Submit</button>
      </div>
    </div>
    <div className="inline-text">
      <small>{footer.copyright}</small>
      <Logo />
      <div className="social-media">
        <a href={footer.facebook}>
          <FacebookIcon />
        </a>
        <a href={footer.instagram}>
          <InstagramIcon />
        </a>
        <a href={footer.twitter}>
          <TwitterIcon />
        </a>
      </div>
    </div>
  </div>    
)

export default Footer;
