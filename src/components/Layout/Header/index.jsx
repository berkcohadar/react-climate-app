import React from 'react'
import logo from "assets/logo/logo.png"
import ThemeToggler from './ThemeToggler'

export default function Header({ setTheme }) {
    return (
        <div className='main-header'>
            <div className='header-logo'>
                <img src={logo} />
            </div>
            <div className='header-extra'>
                <div className='header-items'>
                    <div className='header-item active'>
                        <span>Australia</span>
                    </div>
                    <div className='header-item'>
                        <span>Japan</span>
                    </div>
                    <div className='header-item'>
                        <span>Dutch</span>
                    </div>
                </div>
                <div className='header-theme-toggle'>
                    <ThemeToggler setTheme={setTheme}/>
                </div>
            </div>
        </div>
    )
}
