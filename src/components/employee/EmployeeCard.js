import React from 'react'

export default function EmployeeCard(props) {
  return (
    <div>
      <p>{props.employee.name}</p>
      <p>{props.employee.position}</p>
      <br />
      <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fired!</button>
    </div>
  )
}
