import React, { useEffect, useState } from 'react'

import './CopyLinkBtn.css'

const CopyLinkBtn = ({loading=true})=>{
    //This is a button component that will copy the current page URL to the clipboard
    const[label,setLabel] = useState('Copy Page URL')
    const[pageURL, setPageURL] = useState('')
    const[location, setLocation] = useState('')

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
        setLabel('Link Copied')
        setTimeout(
            ()=>{
                setLabel('Copy Page URL')
            }, 10000
        )
    }

    const renderLabel = ()=>{
        if(!loading){
            return label
        }
        else return ''
    }

    const renderIcon = ()=>{
        if(!loading){
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm6.054-9.053l2-2.024v-.887h-4.609l2.609 2.808v.103zm0 12.134v3.955h-16v-16.192l2.666-2.808h-4.666v21h20v-7.98l-2 2.025zm-14.297-11.045h12.651l-3.312-3.569v-.41c.001-1.668-1.352-3.021-3.021-3.021-1.667 0-3.021 1.332-3.021 3l.001.431-3.298 3.569zm6.297-5c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1zm14 7.125l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201z"/></svg>
            )
        }
        else return ''
    }

    return(
        <>
            <div className="copy-link-btn">
                <button onClick={()=>copyLink()}>
                    <span className="button-currentpage hidden">
                        {location}
                    </span>
                    <span className="button-label">
                        {renderLabel()}
                    </span>
                    <span className="button-icon">
                        {renderIcon()}
                    </span>
                </button>
            </div>
        </>
    )
}

export default CopyLinkBtn