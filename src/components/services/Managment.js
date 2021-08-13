import React from 'react'
import './Managment.css'
import ManagmentImage from '../servicesImages/ManagmentImage.png'


export default function Managment() {
  return (
    <div className="Managment">
      <div class="row">
        <div class="col-sm-8">
          <img src={ManagmentImage} class="img-thumbnail" />
        </div>
        <div class="col-sm-4">
          <p class="text-break">We specialize in professional website management & marketing services for your business.
          We can assist you from the earliest development stages of your website planning & implementation to marketing,
          lead generation and growth. 
          </p>
        </div>
      </div>
    </div>
  )
}
