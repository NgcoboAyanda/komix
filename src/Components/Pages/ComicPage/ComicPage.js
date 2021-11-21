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
                <div className="comic_page-content-poster">
                    <img src={comic.thumbnail.path+'/landscape_incredible'+'.'+comic.thumbnail.extension}/>
                </div>
            </div>
        </div>
    )
}

export default ComicPage