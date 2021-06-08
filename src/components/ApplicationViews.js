import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { ProductProvider } from "./product/ProductProvider"
import { ProductList } from "./product/ProductList"

export const ApplicationViews = () => {
  return (
    <>
      <LocationProvider>
        <ProductProvider>
          <Route exact path="/">
            <h3>Welcome to Kandy Korner</h3>
          </Route>

          <Route exact path="/locations">
            <LocationList />
          </Route>

          <Route exact path="/products">
            <ProductList />
          </Route>
        </ProductProvider>
      </LocationProvider>

    </>
  )
}