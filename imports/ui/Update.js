import React from 'react'
import { Updates } from '../api/updates.js'

const Update = props => {
  deleteThisUpdate = () => {
    Updates.remove(props.update._id)
  }
  return (
    <React.Fragment>
      <li>{props.update.text}</li>
      <button onClick={this.deleteThisUpdate}>&times;</button>
    </React.Fragment>
  )
}

export default Update
