import React from "react";
import AnimalCard from "./animal/AnimalCard";
import "./Kennel.css";
import LocationCard from "./LocationCard";
import OwnerCard from "./OwnerCard";

const Kennel = () => {
  return (
    <div>
      <div>
        <OwnerCard />
        <LocationCard />
      </div>
      <div className="container-cards">
        <AnimalCard />
        <AnimalCard />
        <AnimalCard />
      </div>
    </div>
  );
};

export default Kennel;