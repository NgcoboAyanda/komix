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
            console.log(comic)
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
            console.log(comic)
            try{
                setComicPrice(comic.prices[0].price)
                setComicURL(comic.urls[0].url)
                setComicCreators(comic.creators.items)
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
                console.log(comicID)
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
            return(
                creators.map(creator=>{
                    return(
                        <div className="comic_page-information-creators-data-creator">
                            <span className="creator-name">
                                    {creator.name}
                                </span> &nbsp;&nbsp;-&nbsp;&nbsp;
                                 <span className="creator-role">
                                    {capitalizeFirstLetter(creator.role)}
                                </span>
                        </div>
                    )
                })
            )
        }
    }

    //poster path and extension
    const {thumbnail:{path,extension}} = comic

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

            <div className="comic_page-content">
                <div className="comic_page-content-poster" style={{backgroundImage: `linear-gradient(to top, black, rgba(0,0,0,0.3)),url(${path}.${extension})`}}>
                    <div></div>
                </div>
                <div className="comic_page-content-poster-small">
                    <img src={`${path}.${extension}`} alt="" srcset="" />
                </div>
            </div>

            <div className="comic_page-information">
                <div className="comic_page-information-space">
                    
                </div>
                <h2 className="comic_page-information-title">
                    {`${comic.title}`}
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
                    {comic.description||'No description.'}
                </div>

                <div className="comic_page-information-creators">
                    <h3 className="comic_page-information-creators-subheading">
                        Creators
                    </h3>
                    <div className="comic_page-information-creators-data">
                        {renderCreators()}
                    </div>
                </div>

                <div className="comic_page-information-date">
                    <h3 className="comic_page-information-date-subheading">
                        Date
                    </h3>
                    <div className="comic_page-information-date-data">
                        <div className="comic_page-information-date-data-item">
                            <span className="date-key">
                                    Release Date:
                                </span> &nbsp;&nbsp;-&nbsp;&nbsp;
                                 <span className="date-value">
                                    2002-15-04
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComicPage