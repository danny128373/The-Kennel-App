import React from 'react'
import './Owner.css'

const OwnerCard = (props) => {
  return (
    <div className="card">
      <h3 className="card-content">
        {props.owner.name}
      </h3>
      <p>{props.owner.phone}</p>
      <button type="button"
        onClick={() => props.history.push(`/owners/${props.owner.id}/edit`)}>
        Edit
      </button>
      <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Ban this customer!</button>
    </div>

  )
}

export default OwnerCard