import React from 'react'
import Button from './ui/button'

const Questions = ({questionsDescription = '', questionsTitle = '', discoverMoreLink = ''}) => (
  <section className="Questions">
    <h2 className="section-title white">{questionsTitle}</h2>
    <p className="description">{questionsDescription}</p>
    <Button
      url={discoverMoreLink}
      text="Discover more"
      addClass="wider"
    />
  </section>
)

export default Questions
