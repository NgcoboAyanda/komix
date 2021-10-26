import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Router, withRouter } from 'react-router'

import Searchbox from '../../../Utitilies/Searchbox/Searchbox'


import './ResultsPage.css'

const ResultsPage = (props)=>{
    const[searchTerm, setSearchTerm] = useState('')
    const[category, setCategory] = useState('comic')

    useEffect(
        //when component mounts
        ()=>{
            let params = new URLSearchParams(props.location.search)
            setSearchTerm(params.get('q'))
        },
        []
    )

    useEffect(
        //each time we change the category
        ()=>{
            let params = new URLSearchParams(props.location.search)
            setCategory(params.get('category'))
        },
        [props.location.search]
    )

    const renderCurrentCategory = name => {
        /* will return 'results_page-category-selected' if name === category (state property)*/
        if(name === category) return 'results_page-category-selected'
        else return ''
    }

    return(
        <div className="results_page">
            <form className="results_page-searchbox">
                <Searchbox value={searchTerm} onChange={setSearchTerm}/>
            </form>
            <ul className="results_page-categories">
                {/*
                <li className={`results_page-category ${renderCurrentCategory('all')}`}>
                    <NavLink  
                        to={`/search?q=${searchTerm}&category=all`}>
                        All
                    </NavLink>
                </li> */}
                <li className={`results_page-category ${renderCurrentCategory('comics')}`}>
                    <NavLink 
                        to={`/search?q=${searchTerm}&category=comics`}>
                        Comics
                    </NavLink>
                </li>
                <li className={`results_page-category ${renderCurrentCategory('characters')}`}>
                    <NavLink 
                        to={`/search?q=${searchTerm}&category=characters`}>
                        Characters
                    </NavLink>
                </li>
                <li className={`results_page-category ${renderCurrentCategory('creators')}`}>
                    <NavLink
                        to={`/search?q=${searchTerm}&category=creators`}>
                        Creators
                    </NavLink>
                </li>
            </ul>
            <div className="results_page-content">
                <div className="results_page-content-searched-term">
                    <p>
                        You searched for <span className="results_page-term-searched">Jan Michael Vincent</span>
                    </p>
                </div>
            </div>
            {/*
            
            */}
        </div>
    )
}


export default withRouter(ResultsPage)