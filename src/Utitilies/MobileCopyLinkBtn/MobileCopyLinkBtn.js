import React, { useState, useEffect } from 'react'

import './MobileCopyLinkBtn.css'

const MobileCopyLinkBtn = ({loading=true}) => {
    const[location, setLocation] = useState('')
    const[copied, setCopied] = useState(false)

    useEffect(
        //on component boot
        ()=>{
            const theLocation = window.location.href
            setLocation(theLocation)
        }, []
    )

    const copyLink = e => {
        //the function that will execute once the button is clicked
        navigator.clipboard.writeText(location)
        setCopied(true)
        setTimeout(
            ()=>{
                setCopied(false)
            }, 10000
        )
    }
    

    const renderBtn = ()=>{
        if(!loading && !copied){
            return(
                <>
                    <span className="label">
                        Copy Page URL
                    </span>
                    <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm6.054-9.053l2-2.024v-.887h-4.609l2.609 2.808v.103zm0 12.134v3.955h-16v-16.192l2.666-2.808h-4.666v21h20v-7.98l-2 2.025zm-14.297-11.045h12.651l-3.312-3.569v-.41c.001-1.668-1.352-3.021-3.021-3.021-1.667 0-3.021 1.332-3.021 3l.001.431-3.298 3.569zm6.297-5c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1zm14 7.125l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201z"/></svg>
                    </span>
                </>
            )
        }
        else if(!loading && copied){
            return (
                <>
                    <span className="label">
                        URL Copied
                    </span>
                    <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.48 10.089l1.583-1.464c1.854.896 3.028 1.578 5.11 3.063 3.916-4.442 6.503-6.696 11.311-9.688l.516 1.186c-3.965 3.46-6.87 7.314-11.051 14.814-2.579-3.038-4.301-4.974-7.469-7.911zm14.407.557c.067.443.113.893.113 1.354 0 4.962-4.038 9-9 9s-9-4.038-9-9 4.038-9 9-9c1.971 0 3.79.644 5.274 1.723.521-.446 1.052-.881 1.6-1.303-1.884-1.511-4.271-2.42-6.874-2.42-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11c0-1.179-.19-2.313-.534-3.378-.528.633-1.052 1.305-1.579 2.024z"/></svg>
                    </span>
                </>
            )
        }
        else{
            return ''
        }
    }

    return(
        <button className="mobile-copylinkbtn" onClick={()=>copyLink()}>
            {renderBtn()}
        </button>
    )
}

export default MobileCopyLinkBtn