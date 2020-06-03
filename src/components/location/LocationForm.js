import React, { useState } from 'react';
import ApiManager from '../../modules/ApiManager';
import './LocationForm.css'

const LocationForm = props => {
  const [location, setLocation] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create locations object, invoke the ApiManager post method, and redirect to the full location list
  */
  const constructNewLocation = evt => {
    evt.preventDefault();
    if (location.address === "" || location.name === "") {
      window.alert("Please enter name and address of location");
    } else {
      setIsLoading(true);
      // Create the location and redirect user to location list
      ApiManager.post(location, 'locations')
        .then(() => props.history.push("/locations"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Enter Name"
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="address"
              placeholder="Enter Address"
            />
            <label htmlFor="address">Address</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewLocation}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LocationForm