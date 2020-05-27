import React, { useState, useEffect } from 'react';

import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

const LocationDetail = props => {
  const [location, setLocation] = useState({ address: "" });

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    LocationManager.get(props.locationId)
      .then(location => {
        setLocation({
          address: location.address
        });
      });
  }, [props.locationId]);

  return (
    <div className="card">
      <div className="card-content">
        <h3>Address: <span style={{ color: 'darkslategrey' }}>{location.address}</span></h3>
      </div>
    </div>
  );
}

export default LocationDetail;