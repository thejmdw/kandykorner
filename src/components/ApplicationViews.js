import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { ProductProvider } from "./product/ProductProvider"
import { ProductList } from "./product/ProductList"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeProvider } from "./employee/EmployeeProvider"

export const ApplicationViews = () => {
  return (
    <>
      <LocationProvider>
        <ProductProvider>
          <EmployeeProvider>
            <Route exact path="/">
              <h3>Welcome to Kandy Korner</h3>
            </Route>

            <Route exact path="/locations">
              <LocationList />
            </Route>

            <Route exact path="/products">
              <ProductList />
            </Route>

            <Route exact path="/employees">
              <EmployeeList />
            </Route>
            <Route exact path="/employees/create">
              <EmployeeForm />
            </Route>
          </EmployeeProvider>
        </ProductProvider>
      </LocationProvider>

    </>
  )
}