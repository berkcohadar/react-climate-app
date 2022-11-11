import React from 'react'
import Select from "react-select"
import { cities, customStyles } from './utils/chartsHeaderStyles';

export default function ChartsHeader({ title, setCity }) {
  const handleChange = (e) => {
    setCity(e.label);
  }

  return (
    <div className="main-body-title">
      <div className='main-body-title-field'>
        <span>{title}</span>
      </div>
      <div className='main-body-select-field'>
        <span>Showing results for </span>
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
