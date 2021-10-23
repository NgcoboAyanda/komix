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
                border:'none'
            }}
                placeholder="search Marvel comics"
            />
            <div className="search-icon" style={{
                height:'50px',
                width:'50px',
                position:'absolute',
                right:'5px',
                top:'50%',
                transform:'translateY(-50%)'
                }}>
                    <img src={SearchIcon} alt="" style={{
                        height:'100%',
                        width:'100%',
                        padding: '15px'
                    }}/>
            </div>
        </>
    )
}

export default Searchbox