import React, { useState, useEffect } from 'react';

import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    LocationManager.get(props.locationId).then(location => {
      setLocation({
        name: location.name,
        address: location.address
      });
      setIsLoading(false);
    });
  }, [props.locationId]);

  const handleDelete = () => {
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
        <h3>Address: <span style={{ color: 'darkslategrey' }}>{location.address}</span></h3>
      </div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
        Discharge
        </button>
    </div>
  );
}

export default LocationDetail;