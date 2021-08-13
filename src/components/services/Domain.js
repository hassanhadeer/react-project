import React from 'react'
import './Domain.css'
import DomainImage from '../servicesImages/DomainImage.png'

export default function Domain() {
  return (
    <div className="Domain">
      <div class="row">
        <div class="col-sm-8">
          <img src={DomainImage} class="img-thumbnail" />
        </div>
        <div class="col-sm-4">
          <p class="text-break">Managing a large domain portfolio can be both time consuming and challenging. Let our experienced account managers handle the day-to-day management of your portfolio, so you can stay focused on your business. When you choose us, you get a dedicated account manager responsible for the security and strategy of your domain portfolio.
          </p>
        </div>
      </div>
    </div>
  )
}
