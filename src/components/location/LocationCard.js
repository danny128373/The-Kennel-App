import React from 'react'
import { Link } from "react-router-dom";
import './Location.css'

export default function LocationCard(props) {
  return (
    <address className="card">
      <div className="card-content">
        <h3>{props.location.name}</h3>
        <p>{props.location.address}</p>
        <br />
        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
        {

          sessionStorage.getItem("credentials") != null && <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Dust this place!</button>
          && <button type="button"
            onClick={() => props.history.push(`/locations/${props.location.id}/edit`)}>
            Edit
            </button>
        }
      </div>
    </address>
  )
}
