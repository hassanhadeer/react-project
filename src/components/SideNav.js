import React from 'react'
import { Link, withRouter } from "react-router-dom"
import './SideNav.css'

export default function SideNav() {
  return (
    <div className="SideNav">
      <h5>Services</h5>
      <Link class="left-nav-link" to="/services/Design">Design</Link> <br />
      <Link class="left-nav-link" to="/services/Managment">Managment</Link> <br />
      <Link class="left-nav-link" to="/services/Graphic">Graphic</Link> <br />
      <Link class="left-nav-link" to="/services/Domain">Domain</Link> <br />
      <Link class="left-nav-link" to="/services/Portfolio">Portfolio</Link> <br />
      <Link class="left-nav-link" to="/services/Media">Media</Link> <br />
      <Link class="left-nav-link" to="/services/Marketing">Marketing</Link> <br />
      <Link class="left-nav-link" to="/services/Certificate">Certificate</Link><br />
    </div>
  )
}
