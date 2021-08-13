import React from 'react'
import './Logo.css'
import LogoImage from '../images/LogoImage.png'

export default function Logo() {
  return (
    <div className="Logo">
      <img src={LogoImage} />
    </div>
  )
}
