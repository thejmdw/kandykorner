import React from "react"
import { useState, useContext, useEffect } from "react"
import { OrderContext } from "./OrderProvider"
import { ProductContext } from "../product/ProductProvider"
import "./Order.css"

export const OrderList = () => {
  const { orders, getOrders, removeProductFromOrder } = useContext(OrderContext)
  

  useEffect(() => {
    getOrders()
  }, [])

  const filteredOrders = orders.filter(order => order.customerId === parseInt(localStorage.getItem("kandy_customer")))

  return (
    <>
      <h3>Orders</h3>
    <section className="orders">
      {
    filteredOrders.map(o => {
      return (
        <section className="order" key={o.id}>
          <h3>{o.product.name}</h3>
          <h5>{o.timeStamp}</h5>
          <h5>${o.product.price}</h5>
          <button onClick={() => removeProductFromOrder(parseInt(o.timeStamp))}>Remove Item</button>
        </section>

      )
    })}
    </section>
    </>
  )
}

// onClick={() => removeProductFromOrder(p.id)}