import React, { Component } from 'react'
import AddUpdate from './AddUpdate.js'
import UpdatesList from './UpdatesList.js'
import { withTracker } from 'meteor/react-meteor-data'
import { Updates } from '../api/updates.js'

class App extends Component {
  render() {
    return (
      <div>
        <AddUpdate handleSubmit={this.handleSubmit} />
        <UpdatesList updates={this.props.updates} />
      </div>
    )
  }
}
export default withTracker(() => {
  Meteor.subscribe('updates')
  return {
    updates: Updates.find({}).fetch()
  }
})(App)
