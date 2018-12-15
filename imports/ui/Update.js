import React from 'react'
import { Updates } from '../api/updates.js'
import { Meteor } from 'meteor/meteor'

const Update = props => {
  deleteThisUpdate = () => {
    Meteor.call('updates.remove', props.update._id)
  }
  return (
    <React.Fragment>
      <li>{props.update.text}</li>
      <button onClick={this.deleteThisUpdate}>&times;</button>
    </React.Fragment>
  )
}

export default Update
