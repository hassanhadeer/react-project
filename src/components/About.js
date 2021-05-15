import React from 'react'
import './About.css'
import AboutImage from '../images/AboutImage.png'


export default function About() {
  
  return (
    <div className="About">
      <div class="row">
        <div class="col-sm-8">
          <img src={AboutImage} class="img-thumbnail" />
        </div>
        <div class="col-sm-4">
          <p class="text-break">CDT is a professional software development company in London Ontario Canada, with strong team of full-stack software developers, 
          we help our clients to achieve unsurpassed quality at all stages of the web, mobile application development. 
          ,we help organizations across the globe to gain sustainable competitive advantage through the adoption of innovative technologies.
          </p>
        </div>
      </div>
    </div>
  )
}
