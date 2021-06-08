import React from "react"
import { useState, createContext } from "react"

export const OrderContext = createContext()

export const OrderProvider = (props) => {
  const [orders, setOrders] = useState([])

  const getOrders = () => {
    return fetch(`http://localhost:8088/orders?_expand=customer&_expand=product`)
    .then(res => res.json())
    .then(setOrders)
  }

  const addProductToOrder = (productId) => {
    
    const product = {
      productId,
      customerId: parseInt(localStorage.getItem("kandy_customer")),
      timeStamp: Date.now()
    }

    return fetch(`http://localhost:8088/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(getOrders)
  }

  const removeProductFromOrder = (timeStamp) => {

    const orderId = orders.find(o => o.timeStamp === timeStamp).id
    return fetch(`http://localhost:8088/orders/${orderId}`, {
      method: "DELETE"
    })
    .then(getOrders)
  }


  return (
    <OrderContext.Provider value={{
      orders, getOrders, addProductToOrder, removeProductFromOrder
    }}>
      {props.children}
    </OrderContext.Provider>
  )
}