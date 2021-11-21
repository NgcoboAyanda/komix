import React from 'react'

import NetworkErrorIcon from '../error_icon.png'

import './NetworkError.css'

const NetworkError = ({repeatRequest})=>{

    return(
        <div className="network_error">
            <div className="network_error-icon">
                <img src={NetworkErrorIcon} alt="" className="network_error-icon-img" />
            </div>
            <div className="network_error-information">
                a network error occurred!
            </div>
            <div className="network_error-action">
                <button className="network_error-action-btn"
                onClick={()=>repeatRequest()}>try again</button>
            </div>
        </div>
    )
}

export default NetworkError