import React from "react"
import { useState, createContext } from "react"

export const ProductContext = createContext()

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([])

  const getProducts = () => {
    return fetch(`http://localhost:8088/products?_expand=type`)
    .then(res => res.json())
    .then(data => setProducts(data))
  }

  return (
    <ProductContext.Provider value={{
      products, getProducts
    }}>
      {props.children}
    </ProductContext.Provider>
  )
}