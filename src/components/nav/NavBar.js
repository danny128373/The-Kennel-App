import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import "./NavBar.css";
import ApiManager from '../../modules/ApiManager'

const NavBar = (props) => {

  // added useState for search
  const [search, setSearch] = useState([])
  const [input, setInput] = useState({ input: "" })

  const handleSearch = (evt) => {
    const stateToChange = { ...search };
    stateToChange[evt.target.id] = evt.target.value;
    setSearch(stateToChange);
  }

  const callsAllAPI = () => {
    ApiManager.searchAnimals(input)
  }

  // // useEffect for rerendering input results
  // useEffect(callsAllAPI(), [input]);

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
              <input onChange={handleSearch} type="text" placeholder="Search..." />

              <Link to="/search"><button>Go!</button></Link>
            </li>
            : null}
          {/* end of search */}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);