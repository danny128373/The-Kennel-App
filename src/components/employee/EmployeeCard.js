import React from 'react'

export default function EmployeeCard(props) {
  return (
    <div>
      Employee of the Month: {props.employee.name}!
      <br />
      <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Fired!</button>
    </div>
  )
}
