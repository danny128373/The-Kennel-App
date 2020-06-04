import React, { useState } from 'react'
import AnimalList from './animal/AnimalList'
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationList'
import OwnerList from './owner/OwnerList'

export default function SearchResults(props) {
  return (
    <>
      <div>
        <h2>Matching Animals</h2>
        <AnimalList />
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
