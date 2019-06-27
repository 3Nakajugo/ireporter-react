import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../assests/styles/nav.css'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button className="navbar-toggler nav-button" type="button"
            data-toggle="collapse" data-target="#navbarTogglerah"
            aria-controls="navbarTogglerDemo01" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" /></button>
          <div className="collapse navbar-collapse" id="navbarTogglerah">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active"></li>
            </ul>
            <ul className="navbar-nav ml-2 ">
              <li className="nav-item"><Link className="navlink" to = "/">Home</Link></li>
              <li className="nav-item ml-4">Login</li>
            </ul>
          </div>
        </nav >
      </div>
    )
  }
}

export default Navbar;