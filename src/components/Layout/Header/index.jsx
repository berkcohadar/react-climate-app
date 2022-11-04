import React from 'react'

export default function Header() {
  return (
    <div className='main-header'>
        <div className='header-logo'>
            <img src="https://www.arbolmarket.com/wp-content/uploads/2020/11/arbollogo.png"/>
        </div>
        <div className='header-items'>
            <div className='header-item active'>
                <span>Home</span>
            </div>
            <div className='header-item'>
                <span>Climate</span>
            </div>
            <div className='header-item'>
                <span>API</span>
            </div>
        </div>
    </div>
  )
}
