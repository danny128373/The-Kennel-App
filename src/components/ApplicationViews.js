import { BrowserRouter as Router } from 'react-router-dom';
import React from "react";
import Home from "./home/Home";
import AnimalCard from "./animal/AnimalCard";
import LocationCard from "./location/LocationCard";
import EmployeeCard from "./employee/EmployeeCard";
import OwnerCard from "./owner/OwnerCard";

const ApplicationViews = () => {
  return (
    <>
      <Router
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Router
        path="/animals"
        render={props => {
          return <AnimalCard />;
        }}
      />
      <Router
        path="/locations"
        render={props => {
          return <LocationCard />;
        }}
      />
      <Router
        path="/employees"
        render={props => {
          return <EmployeeCard />;
        }}
      />
      <Router
        path="/owners"
        render={props => {
          return <OwnerCard />;
        }}
      />
    </>
  );
};

export default ApplicationViews;