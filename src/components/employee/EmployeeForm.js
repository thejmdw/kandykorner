import React from "react"
import { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import "./Employee.css"

export const EmployeeForm = () => {
  const { addEmployee } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)

  const [ employee, setEmployee ] = useState({
    name: "",
    locationId: 0,
    manager: false,
    fullTime: false,
    hourlyRate: 0
  })

  const history = useHistory()

  useEffect(() => {
    getLocations()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleControlledInputChange = e => {
    const newEmployee = { ...employee}
    if (e.target.id === "manager" || e.target.id === "fullTime") {
      newEmployee[e.target.id] === false ? newEmployee[e.target.id] = true : newEmployee[e.target.id] = false
      setEmployee(newEmployee) 
    } else {

    newEmployee[e.target.id] = e.target.value
    setEmployee(newEmployee)
    }
  }

  const handleClickSaveEmployee = e => {
    e.preventDefault() 

    const locationId = parseInt(employee.locationId)

    if (locationId === 0) {
      window.alert("Please select a location")
    } else {
        //Invoke addAnimal passing the newAnimal object as an argument
        //Once complete, change the url and display the animal list

        const newEmployee = {
          name: employee.name,
          locationId: locationId,
          manager: employee.manager,
          fullTime: employee.fullTime,
          hourlyRate: employee.hourlyRate
        }
        addEmployee(newEmployee)
          .then(() => history.push("/employees"))
      }
    }
  

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Employee Name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Employee Name" value={employee.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to Location:</label>
          <select name="locationId" id="locationId" className="form-control" value={employee.locationId} onChange={handleControlledInputChange}>
            <option value="0">Select a location</option>
            {locations.map(l => (
              <option key={l.id} value={l.id}>
                {l.address}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Is this Employee a Manager?:</label>
          <input type="checkbox" id="manager" required className="form-control" onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Is this Employee Full Time?:</label>
          <input type="checkbox" id="fullTime" required autoFocus className="form-control" onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Employee Hourly Rate:</label>
          <input type="number" id="hourlyRate" required autoFocus className="form-control" placeholder="Employee Hourly Rate" value={employee.hourlyRate} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveEmployee}>
        Save Employee
      </button>
    </form>
  )
}