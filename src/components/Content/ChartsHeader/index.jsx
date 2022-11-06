import React, { useState } from 'react'
import Select from "react-select"
export default function ChartsHeader({ title, city, setCity }) {

  const cities = [
    "Amberley",
    "Albany Airport",
    "Bendigo",
    "Bridgetown",
    "Camden",
    "Cerberus",
    "Edinburgh",
    "Gosford"
  ]

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target)
    setCity(e.target.current);
  }

  return (
    <div className="main-body-title">
      <div className='main-body-title-field'>
        <span>{title}</span>
      </div>
      <div className='main-body-select-field'>
        <Select className="main-body-select"
          value={city}
          options={cities}
          isSearchable={true}
          onChange={(e) => handleChange(e)} />
      </div>
    </div>
  )
}
