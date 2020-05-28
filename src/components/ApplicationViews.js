import React from "react";
import { Route } from 'react-router-dom';

import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";
import AnimalForm from './animal/AnimalForm'
import LocationForm from './location/LocationForm'

const ApplicationViews = () => {
  return (
    <>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        exact
        path="/animals"
        render={(props) => {
          return <AnimalList {...props} />
        }}
      />
      <Route
        path="/animals/:animalId(\d+)"
        render={props => {
          return (
            <AnimalDetail
              animalId={parseInt(props.match.params.animalId)}
              {...props}
            />
          );
        }}
      />
      <Route
        path="/animals/new"
        render={(props) => {
          return <AnimalForm
            {...props}
          />
        }} />
      <Route
        exact
        path="/locations"
        render={(props) => {
          return <LocationList {...props} />
        }}
      />
      <Route
        path="/locations/:locationId(\d+)"
        render={props => {
          return (<LocationDetail
            locationId={parseInt(props.match.params.locationId)}
            {...props}
          />
          );
        }}
      />
      <Route
        path="/locations/new"
        render={(props) => {
          return <LocationForm {...props} />
        }}
      />
      <Route
        path="/employees"
        render={props => {
          return <EmployeeList />;
        }}
      />
      <Route
        path="/owners"
        render={props => {
          return <OwnerList />;
        }}
      />
    </>
  );
};

export default ApplicationViews;