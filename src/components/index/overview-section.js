import React from 'react'
import Benefit1 from '../../components/icons/benefit-1'
import Benefit2 from '../../components/icons/benefit-2'
import Benefit3 from '../../components/icons/benefit-3'

import '../../styles/components/index/_overview-section.scss'

const benefits = [
  {"icon": <Benefit1 />, "title": "benefits 1", "description": "Sed maximus eu massa non mattis etiam eu porttitor lorem eu euismod velit etiam et leo quis" },
  {"icon": <Benefit2 />, "title": "benefits 2", "description": "Sed maximus eu massa non mattis etiam eu porttitor lorem eu euismod velit etiam et leo quis" },
  {"icon": <Benefit3 />, "title": "benefits 3", "description": "Sed maximus eu massa non mattis etiam eu porttitor lorem eu euismod velit etiam et leo quis" }
]

const OverviewSection = ({
  overviewTitle,
  overviewParagraph,
  benefitTitle1,
  benefitDesc1,
  benefitTitle2,
  benefitDesc2,
  benefitTitle3,
  benefitDesc3
}) => (
  <div className="overview-container" id="features" offset={100}>
    <div className="content">
      <h2>{overviewTitle}</h2>
      <p>{overviewParagraph}</p>
      <div class="inline-benefits">
        <div className="benefit-box">
          <Benefit1 />
          <h3>{benefitTitle1}</h3>
          <p>{benefitDesc1}</p>
        </div>
        <div className="benefit-box">
          <Benefit2 />
          <h3>{benefitTitle2}</h3>
          <p>{benefitDesc2}</p>
        </div>
        <div className="benefit-box">
          <Benefit3 />
          <h3>{benefitTitle3}</h3>
          <p>{benefitDesc3}</p>
        </div>
      </div>
    </div>
  </div>
)

export default OverviewSection;