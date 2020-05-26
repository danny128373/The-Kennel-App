import React from "react";

const AnimalCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src="https://raw.githubusercontent.com/nashville-software-school/client-side-mastery/5e80aaabb916bb1bde8b4bb5d9af26c289885bbd/book-4-the-apprentice/chapters/images/dog.svg" alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">Doodles</span>
        </h3>
        <p>Breed: Poodle</p>
      </div>
    </div>
  );
};

export default AnimalCard;