import React, { useState, useEffect } from 'react';

import ApiManager from '../../modules/ApiManager';
import './LocationDetail.css'

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from ApiManager and hang on to the data; put it into state
    ApiManager.get(props.locationId, 'locations').then(location => {
      setLocation({
        name: location.name,
        address: location.address
      });
      setIsLoading(false);
    });
  }, [props.locationId]);

  const handleDelete = () => {
    setIsLoading(true);
    ApiManager.delete(props.locationId, 'locations').then(() =>
      props.history.push("/locations")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
        <h3>Address: <span style={{ color: 'darkslategrey' }}>{location.address}</span></h3>
      </div>
      <button type="button"
        onClick={() => props.history.push(`/locations/${props.locationId}/edit`)}>
        Edit
        </button>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
        Discharge
        </button>
    </div>
  );
}

export default LocationDetail;