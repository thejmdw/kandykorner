import React from "react"
import { useState, useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import "./Customer.css"

export const CustomerList = () => {
  const { customers, getCustomers } = useContext(CustomerContext)

  useEffect(() => {
    getCustomers()
  }, [])

  return (
    <>
    <h3>Customers</h3>
    <div className="customers">
      {
    customers.map(c => {
      return (
        <section className="customer" key={c.id}>
          <h3>{c.name}</h3>
        </section>
      )
    })}
    </div>
    </>
  )
}