import React, { Component } from 'react'

class SignUp extends Component {
  render() {
    return (
      <>
        <div>
          <h2>Sign Up</h2>
          <p>
            By creating an account you will be able to track the pops you've tried, earn and view
            badges you receive for reaching milestones.
          </p>
        </div>
        <div>
          <form>
            <label>
              <input type="text" />
            </label>
          </form>
        </div>
      </>
    )
  }
}

export default SignUp
