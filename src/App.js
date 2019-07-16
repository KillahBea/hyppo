import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Profile from './pages/Profile'
import Flavors from './pages/Flavors'
import Header from './components/Header'
import auth from './Auth'
import axios from 'axios'
import history from './history'

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication()
  }
}

class App extends Component {
  render() {
    return (
      <>
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Profile" exact component={Profile} />
            <Route path="/Flavors" render={props => <Flavors auth={auth} {...props} />} />
            <Route
              path="/callback"
              render={() => {
                auth.handleAuthentication(() => {
                  // // NOTE: Uncomment the following lines if you are using axios
                  // //
                  // // Set the axios authentication headers
                  axios.defaults.headers.common = {
                    Authorization: auth.authorizationHeader()
                  }
                })
                return <p />
              }}
            />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
