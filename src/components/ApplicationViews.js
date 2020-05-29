import React from "react";
import { Route, Redirect } from "react-router-dom";

import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";
import AnimalForm from './animal/AnimalForm'
import LocationForm from './location/LocationForm'
import EmployeeForm from './employee/EmployeeForm'
import OwnerForm from './owner/OwnerForm'
import Login from "./auth/Login";
import AnimalEditForm from "./animal/AnimalEditForm";
import LocationEditForm from "./location/LocationEditForm";
import OwnerEditForm from "./owner/OwnerEditForm";
import OwnerCard from "./owner/OwnerCard"
import EmployeeCard from "./employee/EmployeeCard"
import EmployeeEditForm from './employee/EmployeeEditForm'

const ApplicationViews = () => {
  // Check if credentials are in session storage returns true/false
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  return (
    <>
      <Route path="/login"
        component={Login}
      />
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route exact path="/animals" render={props => {
        if (isAuthenticated()) {
          return <AnimalList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route exact path="/animals/:animalId(\d+)" render={props => {
        if (isAuthenticated()) {
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route
        path="/animals/new"
        render={(props) => {
          return <AnimalForm
            {...props}
          />
        }} />
      <Route path="/animals/:animalId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <AnimalEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route exact path="/locations" render={props => {
        if (isAuthenticated()) {
          return <LocationList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route exact path="/locations/:locationId(\d+)" render={props => {
        if (isAuthenticated()) {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route
        path="/locations/new"
        render={(props) => {
          return <LocationForm {...props} />
        }}
      />
      <Route path="/locations/:locationId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <LocationEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route exact path="/employees" render={props => {
        if (isAuthenticated()) {
          return <EmployeeList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route
        path="/employees/new"
        render={(props) => {
          return <EmployeeForm {...props} />
        }}
      />
      <Route path="/employees/:employeeId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <EmployeeEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route exact path="/employees/:employeeId(\d+)" render={props => {
        if (isAuthenticated()) {
          return <EmployeeCard employeeId={parseInt(props.match.params.employeeId)} {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route exact path="/owners" render={props => {
        if (isAuthenticated()) {
          return <OwnerList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route
        path="/owners/new"
        render={(props) => {
          return <OwnerForm {...props} />
        }}
      />
      <Route path="/owners/:ownerId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <OwnerEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route exact path="/owner/:ownerId(\d+)" render={props => {
        if (isAuthenticated()) {
          return <OwnerCard ownerId={parseInt(props.match.params.ownerId)} {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
    </>
  );
};

export default ApplicationViews;