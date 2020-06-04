import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import "./NavBar.css";
import ApiManager from '../../modules/ApiManager'

const NavBar = (props) => {

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
    props.history.push("/search")
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
      }))
  }

  // // useEffect for rerendering input results
  useEffect(callsAllAPI, [input]);

  useEffect(() => console.log(search), [search])

  const handleLogout = () => {
    props.clearUser();
    props.history.push('/');
  }

  return (
    <header>
      <h1 className="site-title">
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/"> Home </Link>
          </li>
          {props.hasUser
            ? <li>
              <Link className="nav-link" to="/animals"> Animals </Link>
            </li>
            : null}
          <li>
            <Link className="nav-link" to="/locations"> Locations </Link>
          </li>
          {props.hasUser
            ? <li>
              <Link className="nav-link" to="/employees"> Employees </Link>
            </li>
            : null}
          {props.hasUser
            ? <li>
              <Link className="nav-link" to="/owners"> Owners </Link>
            </li>
            : null}
          {props.hasUser
            ? <li>
              <span className="nav-link" onClick={handleLogout}> Logout </span>
            </li>
            : <li>
              <Link className="nav-link" to="/login">Login</Link>
            </li>}
          {/* added search */}
          {props.hasUser
            ? <li id="search">
              <input onKeyUp={handleInput} type="text" placeholder="Search..." />
              <Link to="/search"><button onClick={callsAllAPI}>Go!</button></Link>
            </li>
            : null}
          {/* end of search */}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);