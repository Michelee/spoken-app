import React from 'react'
import CertificateIcon from './icons/certificate-icon'
import EarthIcon from './icons/earth-icon'
import StudentIcon from './icons/student-icon'
import BoardIcon from './icons/board-icon'

const CoachOverview = ({
  overviewTitle = '',
  overviewDescription = '',
  benefit1title = '',
  benefit1description = '',
  benefit2title = '',
  benefit2description = '',
  benefit3title = '',
  benefit3description = '',
  benefit4title = '',
  benefit4description = ''
}) => (
    <section className="CoachOverview">
      <h2 className="section-title">{overviewTitle}</h2>
      <p className="overview-main-description">{overviewDescription}</p>
      <div className="overview-row">
        <div className="overview-box">
          <span className="icon"><CertificateIcon /></span>
          <div className="overview-item">
            <h4 className="overview-title">{benefit1title}</h4>
            <p className="overview-description">{benefit1description}</p>
          </div>
        </div>
        <div className="overview-box">
          <span className="icon"><StudentIcon /></span>
          <div className="overview-item">
          <h4 className="overview-title">{benefit2title}</h4>
          <p className="overview-description">{benefit2description}</p>
          </div>
        </div>
      </div>
      <div className="overview-row">
        <div className="overview-box">
          <span className="icon"><EarthIcon /></span>
          <div className="overview-item">
          <h4 className="overview-title">{benefit3title}</h4>
          <p className="overview-description">{benefit3description}</p>
          </div>
        </div>
        <div className="overview-box">
          <span className="icon"><BoardIcon /></span>
          <div className="overview-item">
          <h4 className="overview-title">{benefit4title}</h4>
          <p className="overview-description">{benefit4description}</p>
          </div>
        </div>
      </div>
    </section>
)

export default CoachOverview
