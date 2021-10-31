import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Router, withRouter } from 'react-router'

import Searchbox from '../../../Utitilies/Searchbox/Searchbox'


import './ResultsPage.css'
import MarvelAPI from './MarvelAPI'

const ResultsPage = (props)=>{
    const[searchTerm, setSearchTerm] = useState('')
    const[searchedTerm, setSearchedTerm] = useState('')
    const[category, setCategory] = useState('comic')
    const[loading, setLoading] = useState(true)
    const[data, setData] = useState({})

    let history = useHistory()

    const search = e =>{
        setLoading(true)
        searchComics()
        e.preventDefault()
    }

    useEffect(
        /* if data changes */
        ()=>{
            if(data.code === 200){
                setLoading(false)
                setSearchedTerm(searchTerm)
            }
        },
        [data]
    )

    useEffect(
        //when component mounts
        async ()=>{
            let params = new URLSearchParams(props.location.search)
            let term = params.get('q')
            setSearchTerm(term)
            setSearchedTerm(term)
            let theData = await MarvelAPI.getComics(term, ()=>setLoading(false))
            setData(theData)
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

    const searchComics = async () => {
        let theData = await MarvelAPI.getComics(searchTerm)
        setData(theData)
    }

    const renderCurrentCategory = name => {
        /* will return 'results_page-category-selected' if name === category (state property)*/
        if(name === category) return 'results_page-category-selected'
        else return ''
    }

    const renderData = ()=> {
        /*
        if(data && data.code === 200){
            const {data:{results}} = data
            return(
                <ul className="results_page-content-data" >{
                    <li>aaaaaaaaaaaaaa</li>
                }
                </ul>
            )
        }
        */
       const {data:{results}} = data
       /*
       return results.map(item=>{
           return(
               <li>{item.title}</li>
           )
       })*/
       let mapResults = ()=>{
           return results.map(item=>{
               return (
                    <li className="results_page-content-data-item">
                        <li className="results_page-content-data-item-thumbnail">
                            <img src={`${item.thumbnail.path}.jpg`} alt="" />
                        </li>
                        <li className="results_page-content-data-item-text">
                            <span className="results_page-content-data-item-text-title">
                                {item.title}
                            </span>
                            <span className="results_page-content-data-item-price">
                                ${item.prices[0].price}
                            </span>
                        </li> 
                    </li>
               )
           })
       }
       return (
           <div className="results_page-content-data">
               {mapResults()}
           </div>
       )
    }

    const renderResults = () =>{
        if(loading){
            //if the page is still loading
            return <div>we are loading lil bitch</div>
        }
        else if(!loading & data.code === 200){
            //if the page is not loading
            //this means the api call is complete
            return renderData()
        }
    }

    return(
        <div className="results_page">
            <form className="results_page-searchbox" onSubmit={e=>search(e)}>
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
                        You searched for 
                        <span className="results_page-content-searched-term-name">
                            {searchedTerm}
                        </span>
                        in 
                        <span className="results_page-content-searched-term-category">
                            {category}
                        </span>
                    </p>
                </div>
                {renderResults(                                                                                                                                  )}
            </div>
            {/*
            
            */}
        </div>
    )
}


export default withRouter(ResultsPage)