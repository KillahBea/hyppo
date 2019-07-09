import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import '../stylings/flavors.css'
class Flavors extends Component {
  state = {
    pop: [],
    popIsChecked: true,
    checkedPops: []
  }
  componentDidMount() {
    axios.get('https://localhost:5001/api/pop').then(resp => {
      console.log({ resp })
      this.setState({
        pop: resp.data
      })
    })
  }

  boxClicked = (event, flavor) => {
    console.log(event.target.checked)
    console.log(event.target.name)
    console.log(event.target.value)
    if (event.target.checked) {
      axios
        .post('https://localhost:5001/api/consumed', { popId: event.target.value })
        .then(resp => {
          console.log({ resp })
          this.setState({
            consumed: resp.data
          })
        })
    } else {
      // delete the consumed instance
    }
    /**
     *
     * {
     *   id:pop that consumed,
     *
     * }
     */
  }

  handleCheckboxChange = event => this.setState({ checked: event.target.checked })
  render() {
    return (
      <>
        <header>
          <NavLink to="/">Home</NavLink>
        </header>
        <div>
          <h1>Flavors!</h1>
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
