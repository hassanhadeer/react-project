import React from 'react'
import { Link, withRouter } from "react-router-dom"
import './Footer.css'

export default function Footer() {
  return (
    <div className="Footer">
      <div>
        <Link class="Fot-nav-link" to="/Home">Home</Link>
        <Link class="Fot-nav-link" to="/About">About</Link>
        <Link class="Fot-nav-link" to="/Careers">Careers</Link>
        <Link class="Fot-nav-link" to="/Contact">Contact us</Link>
      </div>
      <div class="Copyright">
        <a class="Fot-nav-link">© 2021 Hassan Hadeer, React project!</a>
      </div>

    </div>
  )
}
