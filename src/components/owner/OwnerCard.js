import React from 'react'

const OwnerCard = (props) => {
  return (
    <h2>
      {props.owner.name}
      <br />
      <small>{props.owner.phone}</small>
    </h2>
  )
}

export default OwnerCard