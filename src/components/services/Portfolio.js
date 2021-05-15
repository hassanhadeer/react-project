import React from 'react'
import './Portfolio.css'
import PortfolioImage from '../servicesImages/PortfolioImage.png'


export default function Portfolio() {
  return (
    <div className="Portfolio">
      <div class="row">
        <div class="col-sm-8">
          <img src={PortfolioImage} class="img-thumbnail" />
        </div>
        <div class="col-sm-4">
          <p class="text-break">Are you looking for the best portfolio website example? Or do you want a portfolio website template? Perhaps you already have a design in mind, and you’re just looking for a portfolio website creator. 
          with CDT you can build your portfolio website to build your careers.
          </p>
        </div>
      </div>
    </div>
  )
}
