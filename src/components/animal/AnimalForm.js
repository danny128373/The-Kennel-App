import React, { useState, useEffect } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalForm.css'
import EmployeeManager from '../../modules/EmployeeManager'

const AnimalForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", employeeId: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [employees, setEmployees] = useState([]);

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    console.log(stateToChange)
    setAnimal(stateToChange);
  };

  const getEmployees = () => {
    return EmployeeManager.getAll().then(employees => {
      setEmployees(employees)
    })
  }

  useEffect(() => {
    getEmployees();
  }, []);

  const constructNewAnimal = evt => {
    evt.preventDefault();
    if (animal.name === "" || animal.breed === "" || animal.employeeId === "") {
      window.alert("Please input an animal name, breed, and caretaker");
    } else {
      setIsLoading(true);
      // Create the animal and redirect user to animal list
      AnimalManager.post(animal)
        .then(() => props.history.push("/animals"));
    }
  }

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
              placeholder="Animal name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="breed"
              placeholder="Breed"
            />
            <label htmlFor="breed">Breed</label>
            <label htmlFor="employeeId">Caretaker:</label>
            <select id="employeeId" onChange={handleFieldChange} required>
              <option>Please select a caretaker</option>
              {employees.map(employee => <option key={employee.id} value={employee.id}>{employee.name}</option>)}
            </select>
          </div>
          <br />
          <button
            type="button"
            disabled={isLoading}
            onClick={constructNewAnimal}
          >Submit</button>
        </fieldset>
      </form>
    </>
  );
};

export default AnimalForm