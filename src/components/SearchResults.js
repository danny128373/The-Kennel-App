import React, { useState } from 'react'
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationList'
import OwnerList from './owner/OwnerList'
import AnimalCard from './animal/AnimalCard'
import EmployeeCard from './employee/EmployeeCard'

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
        <EmployeeList />
      </div>
      <div>
        <h2>Matching Locations</h2>
        <LocationList />
      </div>
      <div>
        <h2>Matching Owners</h2>
        <OwnerList />
      </div>
    </>
  )
}
