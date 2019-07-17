import React, { Component } from 'react'
import axios from 'axios'
import auth from '../Auth.js'
import profile from '../stylings/profile.css'
import Badges from '../components/Badges.js'

// const API_URL = 'https://localhost:5001/api/'
const API_URL = 'https://hyppo-gip.herokuapp.com/api/'
class Profile extends Component {
  state = {
    consumed: []
  }
  componentDidMount() {
    // <Badges />
    axios
      .get(API_URL + 'consumed', {
        headers: { Authorization: auth.authorizationHeader() }
      })
      .then(resp => {
        console.log(resp)
        this.setState({ consumed: resp.data })
      })
  }

  render() {
    return (
      <>
        <Badges currentPops={this.state.consumed} />
        <ul className="consumedPopName">
          {this.state.consumed.map(pop => {
            return <li key={pop.id}>{pop.pop.flavorName}</li>
          })}
        </ul>
      </>
    )
  }
}

export default Profile
