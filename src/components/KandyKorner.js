import React from "react"
import "./KandyKorner.css"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { ProductProvider } from "./product/ProductProvider"
import { ProductList } from "./product/ProductList"

export const KandyKorner = () => {
  return (
    <>
      <h3>KandyKorner</h3>
      <article className="locations">
        <LocationProvider>
          <ProductProvider>
            <LocationList />
            <ProductList />
          </ProductProvider>
        </LocationProvider>
      </article>
    </>
  )
}