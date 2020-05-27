import React from 'react'
import { Link } from "react-router-dom";

export default function LocationCard(props) {
  return (
    <address>
      {props.location.address}
      <br />
      <Link to={`/locations/${props.location.id}`}>
        <button>Details</button>
      </Link>
      <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Dust this place!</button>
    </address>
  )
}
