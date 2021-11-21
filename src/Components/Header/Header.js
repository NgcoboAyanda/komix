import React, { useEffect, useState } from 'react'

import './Header.css'//Header css file
import logo from '../../Utitilies/logo.png'//Komix logo

//Components
import MenuButton from '../../Utitilies/MenuButton/MenuButton'


const debounce = (func, wait, immediate)=> {
    let timeout
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


const Header = ({menuVisible, setMenuVisible, color='white'})=>{
    //if menuVisible is true then sidemenu will be visible/ if false side menu will be hidden}
    //scroll
    const[prevScrollPos, setPrevScrollPos] = useState(0)
    const[headerVisible, setHeaderVisible] = useState(true)
    
    const handleScroll = debounce (() => {
        const currentScrollPos = window.pageYOffset
        setHeaderVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 50);
        setPrevScrollPos(currentScrollPos);
    }, 100)

    useEffect(
        ()=>{
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        },
        [prevScrollPos, headerVisible, handleScroll]
    )
    
    return(
        <header className="app-header" style={{top: headerVisible?'0':'-65px'}}>
            <div className="app-header-child app-header-logo">
                {/* Red Komix logo */}
                <img src={logo} alt="" />
            </div>
            <div className="app-header-child app-header-hamburger">
                {/* if menuVisible is true then it will be set to false --- and vice versa */}
                <MenuButton onClickFunction={()=> setMenuVisible(!menuVisible)} color={color}/>
            </div>
        </header>
    )
}

export default Header