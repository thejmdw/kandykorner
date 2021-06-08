import React from "react"
import { useState, useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { OrderContext } from "../order/OrderProvider"
import "./Product.css"

export const ProductList = () => {
  const { products, getProducts } = useContext(ProductContext)
  const { addProductToOrder } = useContext(OrderContext)

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
          <button onClick={() => addProductToOrder(p.id)}>Add Item</button>
        </section>

      )
    })}
    </section>
    </>
  )
}


// { productId: p.id, customerId: parseInt(localStorage.getItem("kandy_customer"))}