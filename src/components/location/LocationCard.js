import React from 'react'

export default function LocationCard(props) {
  return (
    <address>
      {props.location.address}
      <br />
      <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Dust this place!</button>
    </address>
  )
}
