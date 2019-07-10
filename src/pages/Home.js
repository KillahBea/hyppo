import React, { Component } from 'react'
// import Header from '../components/Header.js'
import '../stylings/home.css'
import { NavLink } from 'react-router-dom'

// import axios from 'axios'

class Home extends Component {
  render() {
    return (
      <>
        <div className="hero">
          <img src={require('../assets/bloodoranges.jpg')} />
        </div>
        <div className="message">
          <p className="title">The Hyppo GIP Tracker</p>
          <p>Log In to track the pops you've tried, earn and view the badges you've earned.</p>
        </div>
        <div className="banners">
          <img src={require('../assets/PUBLIX-BANNER.png')} />
          <div className="flavors">
            <NavLink to="/Flavors">Check out the flavors!</NavLink>
          </div>
          <img src={require('../assets/visitpopshops.png')} />
        </div>
        <div>
          <div>
            <img src={require('../assets/StAug.png')} />
            <img src={require('../assets/StAugBuilding.png')} />
          </div>
          <div>
            <p />
            <p />
            <p />
          </div>
        </div>
      </>
    )
  }
}

export default Home
