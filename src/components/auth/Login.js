import React, { useState, useEffect } from "react"
import { withRouter } from 'react-router-dom';

const Login = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    sessionStorage.setItem(
      "credentials",
      JSON.stringify(credentials)
    );
    props.history.push("/");
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      props.setHasUser()
      props.history.push("/")
    }}>
      <fieldset>
        <h3>Please sign in</h3>
        <div className="formgrid">
          <input onChange={handleFieldChange} type="email"
            id="email"
            placeholder="Email address"
            required="" autoFocus="" />
          <label htmlFor="inputEmail">Email address</label>

          <input onChange={handleFieldChange} type="password"
            id="password"
            placeholder="Password"
            required="" />
          <label htmlFor="inputPassword">Password</label>
        </div>
        <button type="submit">Sign in</button>
      </fieldset>
    </form>
  );
};

export default Login