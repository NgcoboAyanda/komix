import React, { useEffect, useState } from 'react'

import './Header.css'//Header css file
import logo from '../../Utitilies/logo.png'//Komix logo

//Components
import MenuButton from '../../Utitilies/MenuButton/MenuButton'
import HomePage from '../Pages/Homepage/HomePage'
import { Link } from 'react-router-dom'


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
            <div>
                <Link to="/" className="app-header-child app-header-logo">
                    <img src={logo} alt="" />
                </Link>

                <div className="app-header-child app-header-hamburger">
                    {/* if menuVisible is true then it will be set to false --- and vice versa */}
                    <MenuButton onClickFunction={()=> setMenuVisible(!menuVisible)} color={color}/>
                </div>
                
                <ul className="app-header-links">
                    <li className="app-header-links-item">
                        <a href="https://github.com/NgcoboAyanda/komix" target="_blank" className="app-header-links-item-link">
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            </span>
                            <span className="label">
                                Github Repo
                            </span>
                        </a>
                    </li>
                    <li className="app-header-links-item">
                        <a href="https://t.me/kiingcxld" target="_blank" className="app-header-links-item-link">
                            <span className="icon">
                                <svg width="24px" height="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" fillRule='evenodd' clipRule='evenodd' strokeLinejoin='round' strokeMiterlimit='1.41421' ><path id="telegram-4" d="M12,0c-6.626,0 -12,5.372 -12,12c0,6.627 5.374,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.628 -5.373,-12 -12,-12Zm3.224,17.871c0.188,0.133 0.43,0.166 0.646,0.085c0.215,-0.082 0.374,-0.267 0.422,-0.491c0.507,-2.382 1.737,-8.412 2.198,-10.578c0.035,-0.164 -0.023,-0.334 -0.151,-0.443c-0.129,-0.109 -0.307,-0.14 -0.465,-0.082c-2.446,0.906 -9.979,3.732 -13.058,4.871c-0.195,0.073 -0.322,0.26 -0.316,0.467c0.007,0.206 0.146,0.385 0.346,0.445c1.381,0.413 3.193,0.988 3.193,0.988c0,0 0.847,2.558 1.288,3.858c0.056,0.164 0.184,0.292 0.352,0.336c0.169,0.044 0.348,-0.002 0.474,-0.121c0.709,-0.669 1.805,-1.704 1.805,-1.704c0,0 2.084,1.527 3.266,2.369Zm-6.423,-5.062l0.98,3.231l0.218,-2.046c0,0 3.783,-3.413 5.941,-5.358c0.063,-0.057 0.071,-0.153 0.019,-0.22c-0.052,-0.067 -0.148,-0.083 -0.219,-0.037c-2.5,1.596 -6.939,4.43 -6.939,4.43Z"/></svg>
                            </span>
                            <span className="label">
                                Contact Me
                            </span>
                        </a>
                    </li>
                    <li className="app-header-links-item" style={{display:'none'}}>
                        <button>
                            toggle
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header