import React from 'react'

const OwnerCard = (props) => {
  return (
    <h2>
      {props.owner.name}
      <br />
      <small>{props.owner.phone}</small>
      <br />
      <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Ban this customer!</button>
    </h2>
  )
}

export default OwnerCard