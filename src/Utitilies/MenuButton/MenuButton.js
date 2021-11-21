import React from 'react';

import './MenuButton.css'

const MenuButton = ( {onClickFunction, color='black'} ) =>{
    /** 
     * A mobile menu button that toggles a side menu.
     * onClick Function must be passed into the component as props.
     * 
     */
    return(
        <div className="menu_button-container" onClick={()=>onClickFunction()} style={{color}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
        </div>
    )
}

export default MenuButton