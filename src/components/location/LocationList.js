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
          <div>{l.sqFt}</div>
          <div>{l.adaCompliant}</div>
        </section>
      )
    })}
    </div>
    </>
  )
}
