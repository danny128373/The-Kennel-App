import React, { useState, useEffect } from 'react';
import ApiManager from '../../modules/ApiManager';
import './AnimalForm.css'

const AnimalForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", employeeId: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [employees, setEmployees] = useState([]);

  const handleFieldChange = event => {
    const stateToChange = { ...animal }
    stateToChange[event.target.id] = event.target.value
    if (parseInt(stateToChange[event.target.id]) < parseInt(stateToChange[event.target.id]) + 1) {
      stateToChange[event.target.id] = parseInt(stateToChange[event.target.id]);
    } else {
      stateToChange[event.target.id] = event.target.value;
    }
    setAnimal(stateToChange);
  };

  const getEmployees = () => {
    return ApiManager.getAll('employees').then(employees => {
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
      ApiManager.post(animal, 'animals')
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
            <label className="alignRight" htmlFor="breed">Breed</label>
            <label htmlFor="employeeId">Caretaker:</label>
            <select className="alignRight" id="employeeId" onChange={handleFieldChange} required>
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