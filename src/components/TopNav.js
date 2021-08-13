import React from 'react'
import { Link, withRouter } from "react-router-dom"
import './TopNav.css'

function TopNav() {
  return (
    <div className="TopNav">
      <Link class="Top-nav-link" to="/Home">Home</Link>
      <Link class="Top-nav-link" to="/About">About</Link>
      <Link class="Top-nav-link" to="/Careers">Careers</Link>
      <Link class="Top-nav-link" to="/Contact">Contact us</Link>
    </div>
  )
}

export default withRouter(TopNav);