import React, { Component } from 'react'
import axios from 'axios'
import '../stylings/flavors.css'

const API_URL = 'https://hyppo-gip.herokuapp.com/api/'

class Flavors extends Component {
  state = {
    pop: [],
    popIsChecked: true,
    checkedPops: []
  }
  componentDidMount() {
    axios.get(API_URL + 'pop').then(resp => {
      console.log({ resp })
      this.setState({
        pop: resp.data
      })
    })
  }

  boxClicked = (event, popId) => {
    console.log(event.target.checked)
    console.log(event.target.name)
    console.log(event.target.value)
    if (event.target.checked) {
      axios.post(API_URL + 'consumed', { popId: event.target.value }).then(resp => {
        console.log({ resp })
        this.setState({
          consumed: resp.data
        })
        console.log(this.state.consumed)
      })
    } else {
      console.log(event.target.value)
      console.log(popId)
      axios.delete('https://localhost:5001/api/consumed/' + event.target.value).then(resp => {
        console.log(resp.data)
        // this.setState({
        //   pop: this.state.pop.filter(pop => pop.Id != event.target.value)
        //   // pop: this.state.pop.filter(pop => pop.Id != popId)
        // })
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
