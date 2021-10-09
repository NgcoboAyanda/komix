import React from 'react'
import { Link } from 'react-router-dom'

import './SideMenu.css' //SideMenu css file

//icons
import FeedbackIcon from '../../../Utitilies/feedback_icon.png'
import PrivacyIcon from '../../../Utitilies/privacy_icon.png'
import DropdownIcon from '../../../Utitilies/dropdown_icon.png'
import MenuButton from '../../../Utitilies/MenuButton/MenuButton'

const SideMenu = () =>{
    return(
        <div className="side_menu">
            {/* the top button */}
            <div className="side_menu-button">
                <MenuButton/>
            </div>
            
            {/* the middle links */}
            <ul className="side_menu-link-container">
                {/* THEME LINK */}
                <li className="side_menu-link">
                    <div className="side_menu-link-child side_menu-link-icon">
                        <img src={FeedbackIcon} alt=""/>
                    </div>
                    <div className="side_menu-link-child side_menu-link-label">
                        Theme
                    </div>
                    <div className="side_menu-link-child side_menu-link-dropdown">
                        <img src={DropdownIcon} alt=""/>
                    </div>
                </li>
                {/* GET IN TOUCH LINK */}
                <li className="side_menu-link">
                    <div className="side_menu-link-child side_menu-link-icon">
                        <img src={FeedbackIcon} alt=""/>
                    </div>
                    <div className="side_menu-link-child side_menu-link-label">
                        Get in touch
                    </div>
                    <div className="side_menu-link-child side_menu-link-dropdown">
                        <img src={DropdownIcon} alt=""/>
                    </div>
                </li>

                {/* PRIVACY LINK */}
                <li className="side_menu-link">
                    <div className="side_menu-link-child side_menu-link-icon">
                        <img src={PrivacyIcon} alt=""/>
                    </div>
                    <div className="side_menu-link-child side_menu-link-label">
                        Privacy
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