import React from 'react'

import './Searchbox.css'

import SearchIcon from '../../Utitilies/search_icon.png'

const Searchbox = ({value, onChange}) => {

    return (
        <>
            <input value={value} onChange={e=>onChange(e.target.value)} type="search" style={{
                height:'100%',
                width: '100%',
                outline:'none',
                fontSize: 'inherit',
                paddingLeft: '12px',
                paddingRight: '50px',
                border:'none',
                color:'currentColor'
            }}
                placeholder="search Marvel comics"
            />
            <div className="search-icon" style={{
                height:'50px',
                width:'50px',
                position:'absolute',
                right:'5px',
                top:'50%',
                transform:'translateY(-50%)',
                display:'flex',
                alignItems:'center'
                }}>
                    <svg viewBox="2 -12 20 50" width="50" height="50" style={{
                        fill:'var(--color-primary-dark)',
                        position:'relative',
                        height:'100%',
                        width:'100%',
                    }} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path style={{
                        background:'red'
                    }
                    } d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
            </div>
        </>
    )
}

export default Searchbox