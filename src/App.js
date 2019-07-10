import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Flavors from './pages/Flavors'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/SignUp" exact component={SignUp} />
            <Route path="/LogIn" exact component={LogIn} />
            <Route path="/Flavors" exact component={Flavors} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
