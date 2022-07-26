import React, { useEffect, useState } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { Router, withRouter } from 'react-router'

import Searchbox from '../../../Utitilies/Searchbox/Searchbox'

import './ResultsPage.css'
import MarvelAPI from '../../../Utitilies/MarvelAPI/MarvelAPI'
import SkeletonLoader from '../../../Utitilies/SkeletonLoader/SkeletonLoader'
import Header from '../../Header/Header'
import SideMenu from '../../SideMenu/SideMenu'
import NetworkError from '../../../Utitilies/NetworkError/NetworkError'


/* Results Page component */
const ResultsPage = (props)=>{
    const[searchTerm, setSearchTerm] = useState('')
    const[searchedTerm, setSearchedTerm] = useState('')
    const[category, setCategory] = useState('comic')
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState(false)
    const[data, setData] = useState({})
    const[menuVisible, setMenuVisible] = useState(false)

    //page position
    const[pageYOffset, setPageYOffset] = useState(JSON.parse(sessionStorage.getItem('scrollY')))

    let history = useHistory()

    const searchQuery = props.location.search

    const search = (e,term) =>{
        history.push(`/search?q=${term}`)
        e.preventDefault()
    }

    const searchComics = async term => {
        setError(false)
        setLoading(true)
        let theData = await MarvelAPI.getComics(term)
        if(theData){
            setData(theData)
        }
        else{
            setError(true)
        }
    }

    useEffect(
        ()=>{
            //when searchQuery changes
            setLoading(true)
            let params = new URLSearchParams(props.location.search)
            let term = params.get('q')
            setSearchTerm(term)
            setSearchedTerm(term)
            searchComics(term)
        },
        [searchQuery]
    )

    useEffect(
        /* if data changes */
        ()=>{
            if(data!==undefined){
                if(data.code === 200){
                    console.log(data)
                    setError(false)
                    console.log('aa')
                    setLoading(false)
                    setSearchedTerm(searchTerm)
                    //Waits for 50ms before returning to previous scroll position
                    setTimeout(
                        ()=>{
                            window.scrollTo(0, pageYOffset)
                        },
                        50
                    )
                }
            }
            else{
                setError(true)
            }
        },
        [data]
    )

    const renderCurrentCategory = name => {
        /* will return 'results_page-category-selected' if name === category (state property)*/
        if(name === category) return 'results_page-category-selected'
        else return ''
    }

    const renderData = ()=> {
        /* renders the comics */
       const {data:{results}} = data
       let mapResults = ()=>{
           return results.map(item=>{
               return (
                    <li className="results_page-content-data-item" key={item.id} id={item.id}>
                        <div className="results_page-content-data-item-thumbnail">
                            <img src={`${item.thumbnail.path}.jpg`} alt="" loading='lazy' />
                        </div>
                        <div className="results_page-content-data-item-text">
                            <Link className="results_page-content-data-item-text-title" to={`/comic/${item.id}`} onClick={()=>{
                                sessionStorage.setItem('scrollY', JSON.stringify(window.scrollY))
                            }}>
                                {item.title}
                            </Link>
                            <span className="results_page-content-data-item-price">
                                ${item.prices[0].price}
                            </span>
                        </div> 
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

    const renderLoaders=()=>{
        return(
            <div className="results_page-content-loader">
                <SkeletonLoader/>
                <SkeletonLoader/>
                <SkeletonLoader/>
                <SkeletonLoader/>
                <SkeletonLoader/>
                <SkeletonLoader/>
                <SkeletonLoader/>
            </div>
        )
    }

    const renderNetworkError = () =>{
        return (
            <div className="results_page-content-error">
                <NetworkError repeatRequest={()=>searchComics(searchTerm)}/>
            </div>
        )
    }

    const renderResults = () =>{
        if(!error){
            if(loading){
                //if the page is still loading
                return renderLoaders()
            }
            else if(!loading & data.code === 200){
                //if the page is not loading
                //this means the api call is complete
                return renderData()
            }
        }
        else{
            return renderNetworkError()
        }
    }

    return(
        <div className="results_page"  >
            <SideMenu
                visible={menuVisible}
                toggleVisible={()=>setMenuVisible(!menuVisible)}
            />
            <Header
                menuVisible={menuVisible}
                setMenuVisible={setMenuVisible}
                color='var(--color-primary-dark)'
            />
            <form className="results_page-searchbox" onSubmit={e=>search(e, searchTerm)}>
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
                <li className="results_page-category results_page-category-selected">
                    <NavLink 
                        to={`/search?q=${searchTerm}`}>
                        Comics
                    </NavLink>
                </li>
                {/*
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
                */}
            </ul>
            <div className="results_page-content">
                <div className="results_page-content-searched-term">
                    <p>
                        You searched for 
                        <span className="results_page-content-searched-term-name">
                            {searchedTerm}
                        </span>
                        {/* in
                        <span className="results_page-content-searched-term-category">
                            {category}
                        </span> */}
                    </p>
                </div>
                {renderResults()}
            </div>
            {/*
            
            */}
        </div>
    )
}


export default withRouter(ResultsPage)