import React, { useState, useEffect } from "react";

import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Kennel.css";
import ApiManager from '../modules/ApiManager'

const Kennel = (props) => {

  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated())

  //Added this 
  useEffect(() => {
    setHasUser(isAuthenticated());
  }, []);

  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated())
  }

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }

  // added useState for search
  const [search, setSearch] = useState({ animals: [], employees: [], locations: [], owners: [] })
  //added useState for input
  const [input, setInput] = useState({ input: "" })

  const handleSearch = (evt) => {
    const stateToChange = { ...search };
    stateToChange.input = evt.target.value;
    setSearch(stateToChange);
  }

  const handleInput = (evt) => {
    console.log(evt.target.value)
    const stateToChange = { ...search }
    stateToChange.input = evt.target.value
    // stateToChange.input = evt.key;
    setInput(stateToChange);
  }

  //fetches from all collections using name_like=input
  const callsAllAPI = () => {
    let stateToChange = { ...search }
    ApiManager.searchAnimals(input.input).then(animals => {
      stateToChange.animals = animals
    })
      .then(ApiManager.searchEmployees(input.input).then(employees => {
        stateToChange.employees = employees
      }))
      .then(ApiManager.searchLocations(input.input).then(locations => {
        stateToChange.locations = locations
      }))
      .then(ApiManager.searchOwners(input.input).then(owners => {
        stateToChange.owners = owners
        setSearch(stateToChange)
        console.log("logging search", search)
      }))
  }

  // // useEffect for rerendering input results
  useEffect(callsAllAPI, [input]);

  useEffect(() => console.log(search), [search])

  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} handleInput={handleInput} callsAllAPI={callsAllAPI}{...props} />
      <ApplicationViews search={search} input={input} hasUser={hasUser} setUser={setUser} />
    </>
  );
};

export default Kennel;