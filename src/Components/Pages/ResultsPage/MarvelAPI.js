
//Custom function that deals with the Marvel API
export default (()=>{

    const getComics = async title =>{
        const apiKey = process.env.REACT_APP_MARVEL_KEY
        let baseURL = 'https://gateway.marvel.com/'
        let res = await fetch(`${baseURL}/v1/public/comics?titleStartsWith=${title}&apikey=${apiKey}`)
        .then(resp => resp)
        .catch(err => console.log(err))
        if(res.status === 200){
            let data = await res.json()
            return data
        }
    }

    return {
        getComics
    }
})()