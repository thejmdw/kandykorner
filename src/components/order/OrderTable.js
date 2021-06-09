import React from "react"
import { useState, useContext, useEffect } from "react"
import { OrderContext } from "./OrderProvider"
import { ProductContext } from "../product/ProductProvider"
import "./Order.css"

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const OrderTable = () => {
  const classes = useStyles();
  const { orders, getOrders, removeProductFromOrder } = useContext(OrderContext)
  const { products, getProducts } = useContext(ProductContext)
  const [ filteredOrders, setFilteredOrders ] = useState([])

  const [ groupedProducts, setGroupedProducts ] = useState([])

  
  useEffect(() => {
    getOrders()
    .then(getProducts) 
  }, [])

  
  useEffect(() => {
    const filteredOrders = orders.filter(order => order.customerId === parseInt(localStorage.getItem("kandy_customer")))
    let orderTracker = {}
    let jon = []

    for (const order of filteredOrders) {
      if (order.productId in orderTracker) {
        orderTracker[order.productId] += 1 
      } else {
        orderTracker[order.productId] = 1
      }
    }
    
    for (const productId in orderTracker) {
      const foundProductObj = products.find(product => parseInt(productId) === product.id)
      // debugger
      foundProductObj.quantity = orderTracker[productId]
      console.log(foundProductObj)
      jon.push(foundProductObj)
    }
    setGroupedProducts(jon)
    console.log(orderTracker)
  }, [products])





  // debugger
  // const quantity = (productId) => filteredOrders.filter(order => order.product.id === productId).length

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Products</TableCell>
            <TableCell align="right">Quantity</TableCell>
            {/* <TableCell align="right">Fat&nbsp;(g)</TableCell> */}
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell> */}
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {groupedProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="right">{product.quantity}</TableCell>
              <TableCell align="right">{(product.price)*(product.quantity)}</TableCell>
              {/* <TableCell align="right">{row.carbs}</TableCell> */}
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}




// export const OrderTable = () => {
//   const { orders, getOrders, removeProductFromOrder } = useContext(OrderContext)
  

//   useEffect(() => {
//     getOrders()
//   }, [])

//   const filteredOrders = orders.filter(order => order.customerId === parseInt(localStorage.getItem("kandy_customer")))

//   return (
//     <>
//       <h3>Order</h3>
//     </>
//   )
// }

// onClick={() => removeProductFromOrder(p.id)}
    // <section className="orders">
    //   {
    // filteredOrders.map(o => {
    //   return (
    //     <section className="order" key={o.id}>
    //       <h3>{o.product.name}</h3>
    //       <h5>{o.timeStamp}</h5>
    //       <h5>${o.product.price}</h5>
    //       <button onClick={() => removeProductFromOrder(parseInt(o.timeStamp))}>Remove Item</button>
    //     </section>

    //   )
    // })}
    // </section>