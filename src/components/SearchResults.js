import React, { useState } from 'react'
import AnimalCard from './animal/AnimalCard'
import EmployeeCard from './employee/EmployeeCard'
import LocationCard from './location/LocationCard'
import OwnerCard from './owner/OwnerCard'

export default function SearchResults(props) {
  console.log(props)

  return (
    <>
      <div>
        <h2>Matching Animals</h2>
        {props.search !== undefined ? props.search.animals.map(animal => {
          return <AnimalCard animal={animal} key={animal.id} />
        }) : null}
      </div>
      <div>
        <h2>Matching Employees</h2>
        {props.search !== undefined ? props.search.employees.map(employee => {
          return <EmployeeCard employee={employee} key={employee.id} />
        }) : null}
      </div>
      <div>
        <h2>Matching Locations</h2>
        {props.search !== undefined ? props.search.locations.map(location => {
          return <LocationCard location={location} key={location.id} />
        }) : null}
      </div>
      <div>
        <h2>Matching Owners</h2>
        {props.search !== undefined ? props.search.owners.map(owner => {
          return <OwnerCard owner={owner} key={owner.id} />
        }) : null}
      </div>
    </>
  )
}
