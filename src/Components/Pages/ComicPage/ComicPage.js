import React, {useEffect, useState} from 'react'
import MarvelAPI from '../../../Utitilies/MarvelAPI/MarvelAPI'
import Header from '../../Header/Header'
import SideMenu from '../../SideMenu/SideMenu'

import './ComicPage.css'

const ComicPage = (props) =>{
    const[comicID, setComicID] = useState('')
    const[comic, setComic] = useState({thumbnail:{path:'',extension:''}})
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
                        <span className="pages">
                            Pages
                        </span>
                        <span className="price">Price</span>
                    </div>
                    <div className="comic_page-information-details-link">
                        <button >
                            View On Marvel Website
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComicPage