import React, { useState, useEffect } from "react";

import ApiManager from '../../modules/ApiManager'
import "./AnimalDetail.css";
import { firstLetterCase } from "../../modules/helpers"

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from ApiManager and hang on to the data; put it into state
    ApiManager.get(props.animalId, 'animals').then(animal => {
      setAnimal({
        name: animal.name,
        breed: animal.breed
      });
      setIsLoading(false);
    });
  }, [props.animalId]);

  const handleDelete = () => {
    //invoke the delete function in ApiManager and re-direct to the animal list.
    setIsLoading(true);
    ApiManager.delete(props.animalId, 'animals').then(() =>
      props.history.push("/animals")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{firstLetterCase(animal.name)}</span>
        </h3>
        <p>Breed: {animal.breed}</p>
        <button type="button"
          onClick={() => props.history.push(`/animals/${props.animalId}/edit`)}>
          Edit
        </button>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
};

export default AnimalDetail;