import React from 'react'
import Button from '../components/ui/button'
import WhiteLogo from '../components/icons/white-logo'

const BackgroundContainer = ({
  mainTitle = '',
  mainTitleBold = '',
  mainDescription = '',
  becomeCoachLink = '',
  startCoachingLink = ''
}) => (
  <div className="BackgroundContainer">
    <div className="background-header">
      <span><WhiteLogo /></span>
      <Button
        url={becomeCoachLink}
        text="become a coach"
      />
    </div>
    <div className="background-title-container">
      <h1 className="title">{mainTitle} <span>{mainTitleBold}</span></h1>
      <p className="description">{mainDescription}</p>
      <Button
        url={startCoachingLink}
        text="start coaching"
        addClass="blue"
      />
    </div>
  </div>
)

export default BackgroundContainer
