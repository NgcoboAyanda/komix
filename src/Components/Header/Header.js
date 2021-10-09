import React, { useState } from 'react'

import './Header.css'//Header css file
import logo from '../../Utitilies/logo.png'//Komix logo

//Components
import MenuButton from '../../Utitilies/MenuButton/MenuButton'
import SideMenu from './SideMenu/SideMenu'

const Header = ()=>{
    //side menu state
    //if true then sidemenu will be visible/ if false side menu will be hidden
    const[menuVisible, setMenuVisible] = useState(false)

    return(
        <header className="app-header">
            <div className="app-header-child app-header-logo">
                {/* Red Komix logo */}
                <img src={logo} alt="" />
            </div>
            <div className="app-header-child app-header-hamburger">
                {/* if menuVisible is true then it will be set to false --- and vice versa */}
                <MenuButton onClickFunction={()=> setMenuVisible(!menuVisible)}/>
            </div>
            <SideMenu state={menuVisible} />
        </header>
    )
}

export default Header