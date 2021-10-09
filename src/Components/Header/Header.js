import React from 'react'

import './Header.css'//Header css file

import logo from '../../Utitilies/logo.png'//Komix logo

const Header = ()=>{
    return(
        <header className="app-header">
            <div className="app-header-child app-header-logo">
                <img src={logo} alt="" />
            </div>
            <div className="app-header-child app-header-hamburger">
                hamburger
            </div>
        </header>
    )
}

export default Header