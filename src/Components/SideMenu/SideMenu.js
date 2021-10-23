import React, { useState } from 'react'

import './SideMenu.css' //SideMenu css file

//icons
import FeedbackIcon from '../../Utitilies/feedback_icon.png'
import PrivacyIcon from '../../Utitilies/privacy_icon.png'
import DropdownIcon from '../../Utitilies/dropdown_icon.png'
import ThemeIcon from '../../Utitilies/theme_icon.png'

//Components
import MenuButton from '../../Utitilies/MenuButton/MenuButton'

const SideMenu = ({visible, toggleVisible}) =>{
    const[themeSubmenu, setThemeSubmenu] = useState(false)
    const[contactSubmenu, setContactSubmenu] = useState(false)
    //visible is a state property of Header.js component which is passed downl to SideMenu component.
    //it controls the visibility of the side menu, if it is true then the sidemenu will be visible and if it's false then the side menu will be invisible.

    //toggleVisible is the function that will toggle the visible state property.

    const renderSideMenuClass = () =>{
        /**
         * Renders the class of the side menu
         */
        if(visible){
            return 'side_menu-open'
        }
        else{
            return 'side_menu-closed'
        }
    }

    const renderThemeSubmenu = ()=>{
        if(themeSubmenu){
            return(
                <ul className="side_menu-link-submenu side_menu-link-submenu-hidden">
                    <li className="side_menu-link-submenu-child">
                        aaaaaaaaaaaaaaaaaaaaaaa
                    </li>
                    <li className="side_menu-link-submenu-child">
                        bbbbbbbbbbbbbbbbbbbbbbbb
                    </li>
                    <li className="side_menu-link-submenu-child">
                        cccccccccccccccccccccc
                    </li>
                </ul>
            )
        }
    }

    const renderContactSubmenu = ()=>{
        if(contactSubmenu){
            return(
                <ul className="side_menu-link-submenu side_menu-link-submenu-hidden">
                    <li className="side_menu-link-submenu-child">
                        aaaaaaaaaaaaaaaaaaaaaaa
                    </li>
                    <li className="side_menu-link-submenu-child">
                        bbbbbbbbbbbbbbbbbbbbbbbb
                    </li>
                    <li className="side_menu-link-submenu-child">
                        cccccccccccccccccccccc
                    </li>
                </ul>
            )
        }
    }

    return(
        <div className={`side_menu ${renderSideMenuClass()}`}>
            {/* the top button */}
            <div className="side_menu-button">
                <MenuButton onClickFunction={toggleVisible}/>
            </div>
            
            {/* the middle links */}
            <ul className="side_menu-link-container">
                {/* THEME LINK */}
                <li className="side_menu-link" onClick={()=>console.log('aaaa')}>
                    <div className="side_menu-link-child-container"  >
                        <div className="side_menu-link-child side_menu-link-icon">
                            <img src={ThemeIcon} alt=""/>
                        </div>
                        <div className="side_menu-link-child side_menu-link-label">
                            Theme
                        </div>
                        <div className="side_menu-link-child side_menu-link-dropdown">
                            <img src={DropdownIcon} alt=""/>
                        </div>
                    </div>
                    {renderThemeSubmenu()}
                </li>
                {/* GET IN TOUCH LINK */}
                <li className="side_menu-link" onClick={()=>{
                    console.log('bbbbb')
                    setContactSubmenu(!contactSubmenu)
                    console.log(contactSubmenu)
                }}>
                    <div className="side_menu-link-child-container">
                        <div className="side_menu-link-child side_menu-link-icon">
                            <img src={FeedbackIcon} alt=""/>
                        </div>
                        <div className="side_menu-link-child side_menu-link-label">
                            Get in touch
                        </div>
                        <div className="side_menu-link-child side_menu-link-dropdown">
                            <img src={DropdownIcon} alt=""/>
                        </div>
                    </div>
                    {renderContactSubmenu()}
                </li>

                {/* PRIVACY LINK */}
                <li className="side_menu-link">
                    <div className="side_menu-link-child-container">
                        <div className="side_menu-link-child side_menu-link-icon">
                            <img src={PrivacyIcon} alt=""/>
                        </div>
                        <div className="side_menu-link-child side_menu-link-label">
                            Privacy
                        </div>
                    </div>
                </li>
                <li className="side_menu-link"></li>
            </ul>

            {/* the footer bish */}
            <div className="side_menu-footer">
                Ayanda Ngcobo
            </div>
        </div>
    )
}

export default SideMenu