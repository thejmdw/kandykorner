import React from "react"
import { useState, createContext } from "react"

export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {
  const [employees, setEmployees] = useState([])

  const getEmployees = () => {
    return fetch(`http://localhost:8088/employees?_expand=location`)
    .then(res => res.json())
    .then(setEmployees)
  }

  const addEmployee = (employeeObj) => {
    return fetch(`http://localhost:8088/employees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employeeObj)
    })
    .then(res => res.json())
    .then(getEmployees)
  }

  const getEmployeeById = employeeId => {
    return fetch(`http://localhost:8088/employees/${employeeId}`)
    .then(res => res.json())
  }

  const fireEmployee = employeeId => {
    return fetch(`http://localhost:8088/employees/${employeeId}`, {
      method: "DELETE"
    })
    .then(getEmployees)
  }

  return (
    <EmployeeContext.Provider value={{
      employees, getEmployees, addEmployee, getEmployeeById, fireEmployee             
    }}>
      {props.children}
    </EmployeeContext.Provider>
  )
}
