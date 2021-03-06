import React, { useState, useEffect } from 'react';
//import the components we will need
import OwnerCard from './OwnerCard';
import ApiManager from '../../modules/ApiManager';

const OwnerList = (props) => {
  // The initial state is an empty array
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    // After the data comes back from the API, we
    //  use the setOwners function to update state
    return ApiManager.getAll('owners').then(ownersFromAPI => {
      setOwners(ownersFromAPI)
    });
  };

  const deleteOwner = id => {
    ApiManager.delete(id, 'owners')
      .then(() => ApiManager.getAll('owners').then(setOwners));
  };
  // got the owners from the API on the component's first render
  useEffect(() => {
    getOwners();
  }, []);

  // Finally we use map() to "loop over" the owners array to show a list of owners cards
  return (
    <>
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => { props.history.push("/owners/new") }}>
          Add New Owner
        </button>
      </section>
      <div className="container-cards">
        {owners.map(owner => <OwnerCard key={owner.id} owner={owner} deleteOwner={deleteOwner} {...props} />)}
      </div>
    </>
  );
};

export default OwnerList