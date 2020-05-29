import React from 'react'
import './Owner.css'

const OwnerCard = (props) => {
  return (
    <div className="card">
      <h2 className="card-content">
        {props.owner.name}
        <br />
        <small>{props.owner.phone}</small>
        <br />
        <button type="button"
          onClick={() => props.history.push(`/owners/${props.owner.id}/edit`)}>
          Edit
      </button>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Ban this customer!</button>
      </h2>
    </div>

  )
}

export default OwnerCard