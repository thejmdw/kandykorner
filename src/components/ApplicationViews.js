import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { ProductProvider } from "./product/ProductProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { OrderProvider } from "./order/OrderProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CustomerList"
import { ProductList } from "./product/ProductList"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { OrderList } from "./order/OrderList"
import { OrderTable } from "./order/OrderTable"

export const ApplicationViews = () => {
  return (
    <>

      <LocationProvider>
        <ProductProvider>
          <EmployeeProvider>
            <OrderProvider>
              <CustomerProvider>
                <Route exact path="/">
                  <h3>Welcome to Kandy Korner</h3>
                </Route>

                <Route exact path="/locations">
                  <LocationList />
                </Route>

                <Route exact path="/products">
                  <ProductList />
                </Route>
                
                <Route exact path="/customers">
                  <CustomerList />
                </Route>

                <Route exact path="/employees">
                  <EmployeeList />
                </Route>
                <Route exact path="/employees/create">
                  <EmployeeForm />
                </Route>

                <Route exact path="/order">
                  <OrderList />
                  <OrderTable />
                </Route>
              </CustomerProvider>
            </OrderProvider>
          </EmployeeProvider>
        </ProductProvider>
      </LocationProvider>

    </>
  )
}