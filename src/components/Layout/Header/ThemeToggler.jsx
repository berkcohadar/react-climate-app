import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default function ThemeToggler({setTheme}) {
    return (
        <div className='theme-toggler'>
            <input onChange={() => setTheme(prev => !prev)} type="checkbox" class="checkbox" id="checkbox"/>
            <label for="checkbox" class="label">
                <FontAwesomeIcon className="sw-search-bar-icon" icon={faMoon} />
                <FontAwesomeIcon className="sw-search-bar-icon" icon={faSun} />
                <div class='ball'/>
            </label>
        </div>
    )
}
