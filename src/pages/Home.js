import React, { Component } from 'react'
import Header from '../components/Header.js'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="hero">
          <img src={require('../assets/bloodoranges.jpg')} />
        </div>
        <div>
          <p>The Hyppo GIP Tracker</p>
          <p>Log In to track the pos you've tried, earn and view the badges you've earned.</p>
        </div>
        <div>
          <img src={require('../assets/PUBLIX-BANNER.png')} />
          <p>Check out the flavors!</p>
          <img src={require('../assets/visitpopshops.png')} />
        </div>
        <div>
          <img src={require('../assets/StAug.png')} />
          <img src={require('../assets/StAugBuilding.png')} />
        </div>
      </>
    )
  }
}

export default Home
