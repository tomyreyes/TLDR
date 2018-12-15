import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Updates } from '../api/updates.js'

class AddUpdate extends Component {
  handleSubmit = event => {
    event.preventDefault()

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim()

    Updates.insert({
      text,
      createdAt: new Date()
    })

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
