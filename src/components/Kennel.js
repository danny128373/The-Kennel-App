import React from "react";
import AnimalCard from "./animal/AnimalCard";
import "./Kennel.css";
import LocationCard from "./location/LocationCard";
import OwnerCard from "./owner/OwnerCard";
import EmployeeCard from "./employee/EmployeeCard"

const Kennel = () => {
  return (
    <div>
      <div>
        <OwnerCard />
        <LocationCard />
        <EmployeeCard />
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