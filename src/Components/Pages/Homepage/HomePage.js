import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import './HomePage.css'

import Searchbox from '../../../Utitilies/Searchbox/Searchbox'
import Header from '../../Header/Header'
import SideMenu from '../../SideMenu/SideMenu'

const HomePage = ()=>{
    const[searchTerm, setSearchTerm] = useState('')
    const[menuVisible, setMenuVisible] = useState(false)

    useEffect(
        ()=>{
            let path = localStorage.getItem('komix_fwd_path')
            if(path === '/komix/search'){
                let params = localStorage.getItem('komix_fwd_params')
                //if url is /komix/search
                history.push(`/search${params}`)
                console.log(params)
            }
        }, []
    )

    const toggleMenuVisibility = ()=>{
        setMenuVisible(!menuVisible)
    }

    let history = useHistory()

    const search = () =>{
        if(searchTerm){
            history.push(`/search?q=${searchTerm}`)
        }
    }
    
    return(
        <main className="app-homepage">
            <SideMenu visible={menuVisible} toggleVisible={toggleMenuVisibility} />
            <Header menuVisible={menuVisible} setMenuVisible={setMenuVisible} color='var(--color-primary)'/> 
            <form className="home_searchbox-container" onSubmit={() =>search()}>
                <Searchbox value={searchTerm} onChange={setSearchTerm}/>
            </form>
        </main>
    )
}

export default HomePage