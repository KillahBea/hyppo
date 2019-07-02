import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/hyppologo.png'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <img src={Logo} alt="the hyppo logo" />
        </div>
        <div className="link">
          <NavLink>Sign Up</NavLink>
          <NavLink>Log In</NavLink>
        </div>
      </header>
    )
  }
}

export default Header
