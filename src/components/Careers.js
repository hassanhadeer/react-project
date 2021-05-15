import React from 'react'
import './Careers.css'
import CareersImage from '../images/CareersImage.png'

export default function Careers() {
  return (
    <div className="Careers">
      <div class="row">
        <div class="col-sm-8">
          <img src={CareersImage} class="img-thumbnail" />
        </div>
        <div class="col-sm-4">
          <p class="text-break">This is that place where you can make the most of your talent and skills. Where you are empowered to explore the endless opportunities available across our business</p>
        </div>
      </div>
    </div>
  )
}
