import React from 'react'
import './Graphic.css'
import GraphicImage from '../servicesImages/GraphicImage.png'


export default function Graphic() {
  return (
    <div className="Graphic">
      <div class="row">
        <div class="col-sm-8">
          <img src={GraphicImage} class="img-thumbnail" />
        </div>
        <div class="col-sm-4">
          <p class="text-break">There’s no better way to design a logo and your brand graphic. 
          we will send you tons of ideas for your business’ logo, and you’ll choose your favorite. No templates, robots and frustrating apps. Just a 100% unique logo for you.
          </p>
        </div>
      </div>
    </div>
  )
}
