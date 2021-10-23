import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import './HomePage.css'

import Searchbox from '../../../Utitilies/Searchbox/Searchbox'
import Header from '../../Header/Header'

const HomePage = ({menuVisible, setMenuVisible})=>{
    const[searchTerm, setSearchTerm] = useState('')

    let history = useHistory()

    const search = () =>{
        history.push(`/search?q=${searchTerm}`)
    }
    
    return(
        <main className="app-homepage">
            <Header menuVisible={menuVisible} setMenuVisible={setMenuVisible}/> 
            <form className="home_searchbox-container" onSubmit={() =>search()}>
                <Searchbox value={searchTerm} onChange={setSearchTerm}/>
            </form>
        </main>
    )
}

export default HomePage