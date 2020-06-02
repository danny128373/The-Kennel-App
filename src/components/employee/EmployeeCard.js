import React from 'react'
import './Employee.css'

export default function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{props.employee.name}</h3>
        <p>{props.employee.position}</p>
        <br />
        <button type="button"
          onClick={() => { props.history.push(`/employees/${props.employee.id}/details`) }}>Details</button>
        <button type="button"
          onClick={() => props.history.push(`/employees/${props.employee.id}/edit`)}>
          Edit
      </button>
        <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fired!</button>
      </div>
    </div>
  )
}
