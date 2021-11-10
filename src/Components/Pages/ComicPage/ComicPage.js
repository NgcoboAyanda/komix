import React, {useEffect, useState} from 'react'

import './ComicPage.css'

const ComicPage = (props) =>{
    const[comicID, setComicID] = useState('')
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
            this is the comic page
        </div>
    )
}

export default ComicPage