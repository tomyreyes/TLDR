import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Updates } from '../api/updates.js'
import { Meteor } from 'meteor/meteor'

class AddUpdate extends Component {
  handleSubmit = event => {
    event.preventDefault()

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim()
    if (text.trim() === '') {
      return alert('Include text')
    }
    Meteor.call('updates.insert', text)

    ReactDOM.findDOMNode(this.refs.textInput).value = ''
    return
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
