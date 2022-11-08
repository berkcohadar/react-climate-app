import React, { useState } from 'react'
import Select from "react-select"

export default function ChartsHeader({ title, city, setCity }) {
  const cities = [
    {
      label: "Amberley",
      value: "Amberley",
    },
    {
      label: "Albany Airport",
      value: "Albany-Airport",
    },
    {
      label: "Bendigo",
      value: "Bendigo",
    },
    {
      label: "Bridgetown",
      value: "Bridgetown",
    },
    {
      label: "Camden",
      value: "Camden",
    },
    {
      label: "Cerberus",
      value: "Cerberus",
    },
    {
      label: "Edinburgh",
      value: "Edinburgh",
    },
    {
      label: "Gosford",
      value: "Gosford",
    },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent',
      borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
      color: '#fff',
      textAlign: "start",
      fontSize:"20px",
      cursor:"pointer",
      "&:hover": {
        backgroundColor: "#1d2f70"
      }
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'transparent',
      width: "250px",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: "#ffffff",
      fontSize:"20px",
      textAlign: "start",
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: '#080d1f',
      border: '1px solid rgba(255, 255, 255, 0.3)',
    }),

  }

  const handleChange = (e) => {
    setCity(e.label);
  }

  return (
    <div className="main-body-title">
      <div className='main-body-title-field'>
        <span>{title}</span>
      </div>
      <div className='main-body-select-field'>
      <Select
        defaultValue={cities[0]}
        isClearable={true}
        isSearchable={true}
        name="color"
        options={cities}
        placeholder="Albany"
        styles={customStyles}
        onChange={(e) => handleChange(e)}
      />
      </div>
    </div>
  )
}
