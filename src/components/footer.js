import React from 'react'
import WhiteLogo from './icons/white-logo'
import FacebookIcon from './icons/facebook-icon'
import InstagramIcon from './icons/instagram-icon'
import TwitterIcon from './icons/twitter-icon'
import '../styles/components/_footer.scss'

const Footer = ({
  copyright = '',
  facebook = '',
  twitter = '',
  instagram = ''
}) => (
  <footer className="Footer">
    <span className="all-right-reserve">
      {copyright}
    </span>
    <span className="logo">
      <WhiteLogo />
    </span>
    <div className="social-icons-container">
      <a href={facebook} target="_blank" rel="noopener noreferrer">
        <FacebookIcon />
      </a>
      <a href={instagram} target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
      </a>
      <a href={twitter} target="_blank" rel="noopener noreferrer">
        <TwitterIcon />
      </a>
    </div>
  </footer>
)

export default Footer
