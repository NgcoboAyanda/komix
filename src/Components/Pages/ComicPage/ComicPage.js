import { render } from '@testing-library/react'
import React, {useEffect, useState} from 'react'
import MarvelAPI from '../../../Utitilies/MarvelAPI/MarvelAPI'
import Header from '../../Header/Header'
import SideMenu from '../../SideMenu/SideMenu'

import './ComicPage.css'

const ComicPage = (props) =>{
    const[comicID, setComicID] = useState('')
    const[comic, setComic] = useState({thumbnail:{path:'',extension:''}})
    const[comicPrice, setComicPrice] = useState('0.00')
    const[comicURL, setComicURL] = useState('#')
    const[comicCreators, setComicCreators] = useState([])
    const[menuVisible, setMenuVisible] = useState(false)
    const[error,setError] = useState(false)
    const[loading, setLoading] = useState(true)

    const getComic = async comicId=>{
        setError(false)
        setLoading(true)
        let comic = await MarvelAPI.getComic(comicId)
        try{
            setComic(comic)
        }
        catch{}
    }

    useEffect(
        //when page loads
        ()=>{
            //getting id from props.match.params.id
            const id = props.match.params.id
            if(id){
                setComicID(id)
            }
        },
        []
    )

    useEffect(
        ()=>{
            try{
                setComicPrice(comic.prices[0].price)
                setComicURL(comic.urls[0].url)
                setComicCreators(comic.creators.items)
                if(comic){
                    setLoading(false)
                }
            }
            catch{
                setComicPrice('0.00')
            }
        },
        [comic]
    )

    useEffect(
        //when comic id has been fetched
        ()=>{
            if(comicID){
               //console.log(comicID)
                getComic(comicID)
            }
        },
        [comicID]
    )

    const renderCreators = ()=> {
        let creators = comicCreators || []
        //function to capitalize first letter of a string
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
        if(creators){
            let count = 0
            return(
                creators.map(creator=>{
                    count++
                    return(
                        <div className="comic_page-information-creators-data-creator" key={`creator${count}`}>
                            <span className="creator-name">
                                    {creator.name}<span className="creator-name-colon">:</span>
                                </span>
                                 <span className="creator-role">
                                    {capitalizeFirstLetter(creator.role)}<span className="creator-role-colon">:</span>
                                </span>
                        </div>
                    )
                })
            )
        }
    }

    const renderPage = () =>{
        //if page is loading, we display skeleton loadeers
        if(!loading){
            //poster path and extension
            //if(!comic){
                //setComic({thumbnail:{path:'',extension:''}})
            //}
            return <FinishedPage/>
        }
        //else if page is finished loading, we display the page contents
        else{
            return <SkeletonPage/>
        }
    }

    const FinishedPage = () =>{
        const{path,extension} = comic.thumbnail
        return(
            <>
                <div className="comic_page-content">
                    <div className="comic_page-content-poster" style={{backgroundImage: `linear-gradient(to top, black, rgba(0,0,0,0.3)),url(${path}.${extension})`}}>
                        <div className="comic_page-information-large">
                            <div className="comic_page-information-large-poster">
                                <img src={`${path}.${extension}`} alt="" />
                            </div>
                            
                            <div className="comic_page-information-large-data">
                                <div>
                                    <h2 className="title">
                                        {comic.title}
                                    </h2>
                                    <div className="creators creators-grid">
                                        {renderCreators()}
                                    </div>
                                    <div className="description">
                                        {comic.description}
                                    </div>
                                    <div className="link">
                                        <a href={comicURL} target="_blank">
                                            View On Marvel Website
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comic_page-content-poster-small">
                        <img src={`${path}.${extension}`} alt="" srcSet="" />
                    </div>
                </div>
    
                <div className="comic_page-information">
                    <div className="comic_page-information-space"></div>
                    <h2 className="comic_page-information-title">
                        {comic.title}
                    </h2>
                    <div className="comic_page-information-details">
                        <div className="comic_page-information-details-figures">
                            <span className="comic_page-information-details-figures-pages">
                                <span className="pages-key">
                                    Pages:
                                </span>
                                <span className="pages-value">
                                    {comic.pageCount}
                                </span>
                            </span>
                            <span className="comic_page-information-details-figures-price">
                                <span className="price-key">
                                    Price:
                                </span>
                                <span className="price-value">
                                    ${comicPrice}
                                </span>
                            </span>
                        </div>
                        <div className="comic_page-information-details-link">
                            <a href={`${comicURL}`} target="_blank">
                                View On Marvel Website
                            </a>
                        </div>
                    </div>
    
                    <div className="comic_page-information-description">
                        <div className="description">
                            {comic.description||'No description.'}
                        </div>
                    </div>
    
                    <div className="comic_page-information-creators">
                        <h3 className="comic_page-information-creators-subheading">
                            Creators
                        </h3>
                        <div className="comic_page-information-creators-data">
                            {renderCreators()}
                        </div>
                    </div>
    
                </div>
    
                <div className="comic_page-sharebtn">
                    <button href="#" className="share">
                        <span className="share-label">
                            Copy Page URL
                        </span>
                        <span className="share-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm12.054-5.839l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201zm-6 8.92v3.955h-16v-18h4l2.102 2h3.898l2-2h4v1.911l2-2.024v-1.887h-3c-1.229 0-2.18-1.084-3-2h-8c-.82.916-1.771 2-3 2h-3v22h20v-7.98l-2 2.025zm-8-16.045c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"/></svg>
                        </span>
                    </button>
                </div>
            </>
        )
    }
    
    const SkeletonPage = ()=>{
        return(
            <>
                <div className="comic_page-content">
                    <div className="comic_page-content-poster grad-to-top">
                        <div className="comic_page-information-large">
                                <div className="comic_page-information-large-poster">
                                    <div className="loader"></div>
                                </div>
                                
                                <div className="comic_page-information-large-data">
                                    <div>
                                        <div className="loader"></div>
                                        <div className="creators creators-loader">
                                            <div className="loader"></div>
                                            <div className="loader loader-shorter"></div>
                                            <div className="loader loader-shorter"></div>
                                            <div className="loader"></div>
                                        </div>
                                        <div className="description">
                                            
                                        </div>
                                        <div className="link link-loader">
                                            <a href="#">
                                                
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="comic_page-content-poster-small">
                        <img  alt="" srcset="" />
                    </div>
                </div>
    
                <div className="comic_page-information">
                    <div className="comic_page-information-space">
                        
                    </div>
                    <h2 className="comic_page-information-title">
                        <div className="loader"></div>
                    </h2>
                    <div className="comic_page-information-details">
                        <div className="comic_page-information-details-figures">
                            <span className="comic_page-information-details-figures-pages">
                                <div className="loader"></div>
                            </span>
                            <span className="comic_page-information-details-figures-price">
                                <div className="loader"></div>
                            </span>
                        </div>
                        <div className="comic_page-information-details-link">
                            <a href="#">
                                View On Marvel Website
                            </a>
                        </div>
                    </div>
    
                    <div className="comic_page-information-description">
                        <div className="description">
                            <div className="loader-container">
                                <div className="loader"></div>
                                <div className="loader"></div>
                                <div className="loader"></div>
                                <div className="loader"></div>
                            </div>
                        </div>
                    </div>
    
                </div>
    
                <div className="comic_page-sharebtn">
                    <button href="#" className="share">
                        <span className="share-label">
                            Copy Page URL
                        </span>
                        <span className="share-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm12.054-5.839l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201zm-6 8.92v3.955h-16v-18h4l2.102 2h3.898l2-2h4v1.911l2-2.024v-1.887h-3c-1.229 0-2.18-1.084-3-2h-8c-.82.916-1.771 2-3 2h-3v22h20v-7.98l-2 2.025zm-8-16.045c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"/></svg>
                        </span>
                    </button>
                </div>
            </>
        )
    }

    return(
        <div className="comic_page">
            <SideMenu
                visible={menuVisible}
                toggleVisible={()=>setMenuVisible(!menuVisible)}
            />
            <Header
                menuVisible={menuVisible}
                setMenuVisible={setMenuVisible}
                color='var(--color-primary-dark)'
            />

            {renderPage()}
            <div className="comic_page-copy-link-btn">
                <button>
                    <span className="button-label">
                        Copy Page Link
                    </span>
                    <span className="button-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm6.054-9.053l2-2.024v-.887h-4.609l2.609 2.808v.103zm0 12.134v3.955h-16v-16.192l2.666-2.808h-4.666v21h20v-7.98l-2 2.025zm-14.297-11.045h12.651l-3.312-3.569v-.41c.001-1.668-1.352-3.021-3.021-3.021-1.667 0-3.021 1.332-3.021 3l.001.431-3.298 3.569zm6.297-5c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1zm14 7.125l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201z"/></svg>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default ComicPage