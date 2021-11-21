import React, {useEffect, useState} from 'react'
import Header from '../../Header/Header'
import SideMenu from '../../SideMenu/SideMenu'

import './ComicPage.css'

const ComicPage = (props) =>{
    const[comicID, setComicID] = useState('')
    const[menuVisible, setMenuVisible] = useState(false)
    const[loading, setLoading] = useState(true)

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
        //when comic id has been fetched
        ()=>{
            if(comicID){
                console.log(comicID)
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
        </div>
    )
}

export default ComicPage