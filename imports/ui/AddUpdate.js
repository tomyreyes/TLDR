import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Updates } from '../api/updates.js'
import { Meteor } from 'meteor/meteor'

class AddUpdate extends Component {
  handleSubmit = event => {
    event.preventDefault()

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim()

    Meteor.call('updates.insert', text)

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = ''
  }

  render() {
    return (
      <form className="new-task" onSubmit={this.handleSubmit}>
        <input
          type="text"
          ref="textInput"
          placeholder="Type to add new tasks"
        />
      </form>
    )
  }
}

export default AddUpdate
