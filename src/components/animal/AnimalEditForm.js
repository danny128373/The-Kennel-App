import React, { useState, useEffect } from "react"
import AnimalManager from "../../modules/AnimalManager"
import "./AnimalForm.css"
// importing EmployeeManager to get employees
import EmployeeManager from "../../modules/EmployeeManager"

const AnimalEditForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(false);
  // adding employees useState
  const [employees, setEmployees] = useState([]);

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  //added field change for employees
  const handleFieldChangeEmployee = evt => {
    const stateToChange = { ...employees };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployees(stateToChange);
  };

  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: props.match.params.animalId,
      name: animal.name,
      breed: animal.breed
    };

    AnimalManager.update(editedAnimal)
      .then(() => props.history.push("/animals"))
  }

  useEffect(() => {
    AnimalManager.get(props.match.params.animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, []);

  // fetching employees
  const getEmployees = () => {
    return EmployeeManager.getAll().then(employees => {
      setEmployees(employees)
    })
  }
  //useEffect for employees
  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>
            {/* add select options of caretaker */}
            <label htmlFor="employeeId">Caretaker</label>
            <select className="form-control" id="employeeId" onChange={handleFieldChangeEmployee} required>
              <option>Please select a caretaker</option>
              {employees.map(employee => <option key={employee.id} id={employee.id}>{employee.name}</option>)}
            </select>
            {/* end of select options */}
          </div>

          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default AnimalEditForm