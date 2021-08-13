import React from 'react'
import './Home.css'
import HomeImage from '../images/HomeImage.png'

export default function Home() {
  return (
    <div className="Home">
      <div class="row">
        <div class="col-sm-8">
          <img src={HomeImage} class="img-thumbnail" />
        </div>
        <div class="col-sm-4">
          <p class="text-break">CDT offers your business the best application to standup in the digital market , 
          by providing the right websites and mobile application we can assure you are reaching the successful worldwide business 
          </p>
        </div>
      </div>
    </div>
  )
}
