import React from "react"
import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <>
      <ul className="navbar">
        <li>
          <Link className="navbar__link" to="/">Kandy Korner</Link>
        </li>
        <li>
          <Link className="navbar__link" to="/locations">Locations</Link>
        </li>
        <li>
          <Link className="navbar__link" to="/products">Products</Link>
        </li>
      </ul>
    </>
  )
}