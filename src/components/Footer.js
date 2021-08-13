import React from 'react'
import { Link, withRouter } from "react-router-dom"
import './Footer.css'
import Facebook from '../images/Facebook.png'
import LinkedIn from '../images/LinkedIn.png'
import Twitter from '../images/Twitter.png'


export default function Footer() {
  return (
    <div className="Footer">
      <div>
        <Link class="Fot-nav-link" to="/Home">Home</Link>
        <Link class="Fot-nav-link" to="/About">About</Link>
        <Link class="Fot-nav-link" to="/Careers">Careers</Link>
        <Link class="Fot-nav-link" to="/Contact">Contact us</Link>
      </div>
      <div >
        <a href="https://ca.linkedin.com/" target="_blank"><img class="SocialIcons" src={LinkedIn} /></a>
        <a href="https://www.facebook.com/" target="_blank"><img class="SocialIcons" src={Facebook} /></a>
        <a href="https://twitter.com/?lang=en-ca" target="_blank"><img class="SocialIcons" src={Twitter} /></a>
      </div>
      <div class="Copyright">
        <a class="Fot-nav-link">© 2021 Hassan Hadeer, React project!</a>
      </div>

    </div>
  )
}
