import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/hyppologo.png'
import auth from '../Auth.js'
import header from '../stylings/header.css'

class Header extends Component {
  state = {}

  componentDidMount() {
    this.getUserName()
  }

  logIn = () => {
    auth.login()
  }

  logOut = () => {
    auth.logout()
    window.location.href = '/'
  }

  getUserName = () => {
    if (auth.isAuthenticated()) {
      auth.getProfile((err, profile) => {
        console.log(profile)
        this.setState({
          profileImage: profile.picture,
          name: profile.given_name
        })
      })
    }
  }

  render() {
    return (
      <header>
        <div className="logo">
          <NavLink to="/">
            <img className="HyppoImg" src={Logo} alt="the hyppo logo" />
          </NavLink>
        </div>
        <div className="link">
          {!this.state.name && (
            <button className="signUp" onClick={this.logIn}>
              Sign Up Log In
            </button>
          )}
          {this.state.name && (
            <div className="profileName">
              <div>
                <img className="profileImage" src={this.state.profileImage} />
                <NavLink to="/Profile">{this.state.name}'s Profile</NavLink>
              </div>
              <div>
                <NavLink to="/Flavors">Flavors</NavLink>
              </div>

              <button onClick={this.logOut} className="LogOut">
                Log Out
              </button>
            </div>
          )}
        </div>
      </header>
    )
  }
}

export default Header
