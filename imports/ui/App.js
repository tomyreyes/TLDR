import React, { Component } from 'react'
import AddUpdate from './AddUpdate.js'
import UpdatesList from './UpdatesList.js'
import { withTracker } from 'meteor/react-meteor-data'
import { Updates } from '../api/updates.js'
import SignIn from './SignIn.js'
import Registration from './Registration'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default withTracker(() => {
  Meteor.subscribe('updates')
  return {
    updates: Updates.find({}).fetch()
  }
})(App)
