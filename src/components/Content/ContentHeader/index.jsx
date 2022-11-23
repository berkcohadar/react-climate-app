import React from 'react'
import Select from "react-select"
import { cities, periods, customStyles } from './utils/chartsHeaderStyles';

export default function ContentHeader({ title, setCity, setPeriod }) {
  const handleChangeCity = (e) => {
    setCity(e.label);
  }
  const handleChangePeriod = (e) => {
    setPeriod(e.value);
  }

  return (
    <>
      <div className="main-body-title">
        <div className='main-body-title-field'>
          <span>{title}</span>
        </div>
      </div>
      <div className="main-body-title">
        <div className='main-body-select-field'>
          <span>Showing results for </span>
          <Select
            defaultValue={cities[0]}
            isClearable={true}
            isSearchable={true}
            name="city"
            options={cities}
            placeholder="Albany"
            styles={customStyles}
            onChange={(e) => handleChangeCity(e)}
          />
          <Select
            defaultValue={periods[0]}
            isClearable={true}
            isSearchable={true}
            name="period"
            options={periods}
            placeholder="Last 4 Months"
            styles={customStyles}
            onChange={(e) => handleChangePeriod(e)}
          />
        </div>
      </div>
    </>
  )
}
