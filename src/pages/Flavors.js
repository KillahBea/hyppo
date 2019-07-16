import React, { Component } from 'react'
import axios from 'axios'
import '../stylings/flavors.css'
import auth from '../Auth.js'

const API_URL = 'https://localhost:5001/api/'
// const API_URL = 'https://hyppo-gip.herokuapp.com/api/'

class Flavors extends Component {
  state = {
    pop: [],
    popIsChecked: true,
    checkedPops: [],
    profile: {}
  }
  componentDidMount() {
    axios.get(API_URL + 'pop').then(resp => {
      console.log({ resp })
      this.setState({
        pop: resp.data
      })
      axios
        .get(API_URL + 'consumed', {
          headers: { Authorization: auth.authorizationHeader() }
        })
        //need to return list for user where consumed == true
        .then(resp => {
          console.log({ resp })
          this.setState({
            checkedPops: resp.data.map(c => c.popId)
          })
        })
    })
    if (this.props.auth.isAuthenticated()) {
      this.props.auth.getProfile((err, profile) => {
        this.setState({ profile, err })
      })
    }
  }

  boxClicked = (event, popId) => {
    console.log(event.target.checked)
    console.log(event.target.name)
    console.log(event.target.value)
    const _popId = event.target.value
    if (event.target.checked) {
      axios
        .post(
          API_URL + 'consumed',
          { popId: event.target.value },
          { headers: { Authorization: auth.authorizationHeader() } }
        )
        .then(resp => {
          console.log({ resp })
          this.setState({
            consumed: resp.data,
            checkedPops: this.state.checkedPops.concat(parseInt(_popId))
          })
          console.log(this.state.consumed)
        })
    } else {
      axios
        .delete('https://localhost:5001/api/consumed/' + event.target.value, {
          headers: { Authorization: auth.authorizationHeader() }
        })
        .then(resp => {
          this.setState({
            checkedPops: this.state.checkedPops.filter(pop => {
              return pop != parseInt(_popId)
            })
          })
          console.log("you shouldn't care")
        })
      console.log(this.state.pop)
      // delete the consumed instance
    }
  }

  handleCheckboxChange = event => this.setState({ checked: event.target.checked })
  render() {
    return (
      <>
        <div>
          <div className="intro">
            <p className="title">Flavors!</p>
            <p className="details">Here's a list of just some of the amazing flavors to try!</p>
          </div>
          <ul>
            {this.state.pop.map(pop => {
              return (
                <li className="FlavorList" key={pop.id}>
                  <input
                    name="popIsChecked"
                    type="checkbox"
                    value={pop.id}
                    checked={this.state.checkedPops.includes(pop.id)}
                    onChange={this.boxClicked}
                  />
                  <label htmlFor={pop.flavorName}>{pop.flavorName}</label>
                </li>
              )
            })}
          </ul>
        </div>
      </>
    )
  }
}

export default Flavors
