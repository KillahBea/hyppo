import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/hyppologo.png'

class Header extends Component {
  render() {
    return (
      <header>
        <NavLink to="/">Home</NavLink>
        <div className="logo">
          <img className="HyppoImg" src={Logo} alt="the hyppo logo" />
        </div>
        <div className="link">
          <NavLink to="SignUp">Sign Up</NavLink>
          <NavLink>Log In</NavLink>
        </div>
      </header>
    )
  }
}

export default Header
