import React from 'react'
import './Design.css'
import DesignImage from '../servicesImages/DesignImage.png'


export default function Design() {

  return (
    <div className="Design">
      <div class="row">
        <div class="col-sm-8">
          <img src={DesignImage} class="img-thumbnail" />
        </div>
        <div class="col-sm-4">
          <p class="text-break">Stand out online with a professional website, online store, or portfolio. With Squarespace, you can turn any idea into a reality web or mobile application
          </p>
        </div>
      </div>
    </div>
  )
}
