import React from 'react'
import Update from './Update.js'

const UpdatesList = props => {
  renderUpdates = () => {
    return props.updates.map(update => (
      <Update key={update._id} update={update} />
    ))
  }
  return <ul>{renderUpdates()}</ul>
}

export default UpdatesList
