import React from 'react'
import { Link } from "react-router-dom";

export default function LocationCard(props) {
  return (
    <address>
      <p>{props.location.name}</p>
      <p>{props.location.address}</p>
      <br />
      <Link to={`/locations/${props.location.id}`}>
        <button>Details</button>
      </Link>
      <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Dust this place!</button>
    </address>
  )
}
