import React from "react"
import { useState, useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext)

  useEffect(() => {
    getLocations()
  }, [])

  return (
    <>
    <h3>Locations</h3>
    <div className="locations">
      {
    locations.map(l => {
      return (
        <section className="location" key={l.id}>
          <h3>{l.address}</h3>
          <h5>{l.sqFt} square feet</h5>
          {l.adaCompliant ? <h5>ADA Compliant</h5> : <h5>I'm sorry, we're not ADA Compliant</h5>}
        </section>
      )
    })}
    </div>
    </>
  )
}
