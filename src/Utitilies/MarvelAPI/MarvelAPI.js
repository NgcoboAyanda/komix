
//Custom function that deals with the Marvel API
export default (()=>{
    //defaults
    const apiKey = process.env.REACT_APP_MARVEL_KEY
    let baseURL = 'https://gateway.marvel.com/'

    const saveToSessionStorage = (key, data)=>{
        sessionStorage.setItem(key, JSON.stringify(data))
    }

    const getFromSessionStorage = key=>{
        let item = sessionStorage.getItem(key)
        item = JSON.parse(item)
        return item
    }

    //getting one specific comic
    const getComic = async comicId=>{
        let comic = getFromSessionStorage(comicId)
        if(comic!== null){
            //comics exists on session storage
            return comic //we return comic
        }
        else{
            //comic doesnt exist on session storage so we make an api request to the api
            let res = await fetch(`${baseURL}/v1/public/comics/${comicId}?apikey=${apiKey}`)
            .then(res=>res)
            .catch(err=>err)
            try{
                if(res.status === 200){
                    let data = await res.json()
                    data = data.data.results[0]
                    saveToSessionStorage(comicId, data)
                    return data
                }
            }
            catch{}
        }


    }



    //searching many comics
    const getComics = async title =>{
        //SAVING SEARCH RESULTS TO SESSION STORAGE -- DISABLED
        //retrieving search results in session storage
        /*
        const comics = getFromSessionStorage(title)
        if(comics !== null){
            return comics
        }
        else{
            //if we have no cached search result
            let res = await fetch(`${baseURL}/v1/public/comics?titleStartsWith=${title}&orderBy=title&limit=100&apikey=${apiKey}`)
            .then(resp => resp)
            .catch(err => err)
            try{
                if(res.status === 200){
                    let data = await res.json()
                    saveToSessionStorage(title, data)
                    return data
                }
            }
            catch{ return null }
        } */
        let res = await fetch(`${baseURL}/v1/public/comics?titleStartsWith=${title}&orderBy=title&limit=100&apikey=${apiKey}`)
            .then(resp => resp)
            .catch(err => err)
            try{
                if(res.status === 200){
                    let data = await res.json()
                    saveToSessionStorage(title, data)
                    return data
                }
            }
            catch{ return null }
    }

    return {
        getComics,
        getComic
    }
})()