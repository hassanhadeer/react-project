import React from 'react'
import './Media.css'
import MediaImage from '../servicesImages/MediaImage.png'


export default function Media() {
  return (
    <div className="Media">
      <div class="row">
        <div class="col-sm-8">
          <img src={MediaImage} class="img-thumbnail" />
        </div>
        <div class="col-sm-4">
          <p class="text-break">Do you find it exhausting managing multiple social media accounts daily? Are you praying for an easy way to focus your energy into an all-encompassing solution?
          It's no secret among social media leaders that jumping between different tools and accounts can be draining. It's common for social media staff to end up managingseveral accountsbased on different branches of your company, and all of them on different platforms. Some accounts could be dedicated to sales while others are used for customer service or digital marketing.
          </p>
        </div>
      </div>
    </div>
  )
}
