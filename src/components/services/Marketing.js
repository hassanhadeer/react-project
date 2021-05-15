import React from 'react'
import './Marketing.css'
import MarketingImage from '../servicesImages/MarketingImage.png'


export default function Marketing() {
  return (
    <div className="Marketing">
      <div class="row">
        <div class="col-sm-8">
          <img src={MarketingImage} class="img-thumbnail" />
        </div>
        <div class="col-sm-4">
          <p class="text-break">Growing a business isn't easy. First, you need a viable idea. From there, you need to discover a profitable niche, define a target demographic and have something of value to sell them. Whether you're peddling products, services or information, getting the word out has become increasingly burdensome. And without the right marketing strategies to fuel your growth, churning a profit and staying afloat is virtually impossible.
          </p>
        </div>
      </div>
    </div>
  )
}
