import React from "react"
import { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useHistory, useParams } from "react-router-dom"

export const EmployeeList = () => {
  const { employees, getEmployees, getEmployeeById } = useContext(EmployeeContext)
  const history = useHistory()
  const employeeId = useParams()

  useEffect(() => {
    getEmployees()
      .then(getEmployeeById(employeeId))
  }, [])



  return (
    <>
    <h3>Employees</h3>

    <button onClick={
      () => history.push("/employees/create")
    }
    >Add Employee</button>

    <div className="employees">
      {
    employees.map(e => {
      return (
        <section className="employee" key={e.id}>
          <Link to={`/employees/detail/${e.id}`}><h3>{e.name}</h3></Link>
          {e.manager === true ? <h4>Manager</h4> : <h4>Employee</h4>}
          <h4>{e.location.address}</h4>
          {e.fullTime === true ? <h5>Full Time</h5> : <h5>Part Time</h5>}
          <h5>Hourly Rate: ${e.hourlyRate}</h5>
        </section>
      )
    })}
    </div>
    </>
  )
}
