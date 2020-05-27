import React from 'react'

export default function EmployeeCard(props) {
  return (
    <div>
      Employee of the Month: {props.employee.name}!
    </div>
  )
}
