import React from "react"
import { useState, useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useHistory } from "react-router"

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext)
  const history = useHistory()

  useEffect(() => {
    getEmployees()
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
          <h3>{e.name}</h3>
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
