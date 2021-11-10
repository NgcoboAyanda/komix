import React, { useEffect, useState } from 'react'

import './Header.css'//Header css file
import logo from '../../Utitilies/logo.png'//Komix logo

//Components
import MenuButton from '../../Utitilies/MenuButton/MenuButton'

const Header = ({menuVisible, setMenuVisible, color='white'})=>{
    //if menuVisible is true then sidemenu will be visible/ if false side menu will be hidden}

    return(
        <header className="app-header">
            <div className="app-header-child app-header-logo">
                {/* Red Komix logo */}
                <img src={logo} alt="" />
            </div>
            <div className="app-header-child app-header-hamburger" style={{color}}>
                {/* if menuVisible is true then it will be set to false --- and vice versa */}
                <MenuButton onClickFunction={()=> setMenuVisible(!menuVisible)}/>
            </div>
        </header>
    )
}

export default Header