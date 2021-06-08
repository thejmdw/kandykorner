import React from "react"
import { useState, useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import "./Product.css"

export const ProductList = () => {
  const { products, getProducts } = useContext(ProductContext)

  useEffect(() => {
    getProducts()
  }, [])

  return (
<>
      <h3>Products</h3>
    <section className="products">
      {
    products.map(p => {
      return (
        <section className="product" key={p.id}>
          <h3>{p.name}</h3>
          <h5>{p.type.typeName}</h5>
          <h5>${p.price}</h5>
        </section>

      )
    })}
    </section>
    </>
  )
}
