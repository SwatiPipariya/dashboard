import React from 'react'
import './Navbar.css'
import { FiSettings, FiBell, FiSearch } from "react-icons/fi"

function Navbar() {
    return (
        
        <div class="header">
            <span id="magnify">
                <button id="tggButton">
                   <FiSearch className='srch' />
                </button>
                <i class="fa fa-search" id="mkijn" aria-hidden="true"></i>
                <input type="text" id="searchin" placeholder="Search Dashboard" />
            </span>
            <div className='rght-side'>
            <div id="image_box"></div>
            <FiSettings className='srch'/>
            <FiBell className='fbell'/>
            </div>
        </div>
    )
}

export default Navbar