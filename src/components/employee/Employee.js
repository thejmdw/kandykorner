import React from "react"
import { useContext, useState, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Employee.css"

export const Employee = ({employeeObj}) => {
  const { employees, fireEmployee, getEmployeeById } = useContext(EmployeeContext)
  const [ employee, setEmployee ] = useState({ location: {}, customer: {} })

  const { employeeId } = useParams()
  
  const history = useHistory()
  
  useEffect(() => {
    if (employeeId) {
      const thisEmployee = employees.find(a => a.id === parseInt(employeeId)) || { location: {}, customer: {} }

      setEmployee(thisEmployee)
    } else {
      setEmployee(employeeObj)
    }
     
  }, [])
  
  const handleFireEmployee = () => {
    fireEmployee(employee.id)
    .then(() => {
      history.push("/employees")
    })
  }
  

  return (
    <section className="employee">
      <h3 className="employee__name">{ employee.name }</h3> 
      {employee.manager === true ? <h4>Manager</h4> : <h4>Employee</h4>}
      {employee.fullTime === true ? <h4>Full Time</h4> : <h4>Part Time</h4>}
      <h4 className="employee__address">Location Address: {employee.location.address}</h4>
      <button className="employee__button" onClick={handleFireEmployee}>Fire employee</button>
    </section>
  )
}