import React, { Component } from 'react'
// import Header from '../components/Header.js'
import '../stylings/home.css'
import { NavLink } from 'react-router-dom'
import Locations from '../components/Locations.js'

// import axios from 'axios'

class Home extends Component {
  render() {
    return (
      <>
        <div className="message">
          <p className="title">The Hyppo GIP Tracker</p>
          <p>Log In to track the pops you've tried, earn and view the badges you've earned.</p>
        </div>
        <div className="hero">&nbsp;</div>
        <div className="banners">
          <div className="publix">
            <img src={require('../assets/PUBLIX-BANNER.png')} />
          </div>
          <div className="flavors">
            <NavLink to="/Flavors">Check out the flavors!</NavLink>
          </div>
          <div className="visit">
            <img src={require('../assets/visitpopshops.png')} />
          </div>
        </div>
        <Locations />
      </>
    )
  }
}

export default Home
