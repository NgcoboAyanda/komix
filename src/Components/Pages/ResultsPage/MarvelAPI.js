
//Custom function that deals with the Marvel API
export default (()=>{

    const getComics = async title =>{
        let baseURL = 'https://gateway.marvel.com/'
        let res = await fetch(`${baseURL}/v1/public/comics?titleStartsWith=${title}&apikey=bce49e14ec363a1620b3a387da096a3e`)
        .then(resp => resp)
        .catch(err => console.log(err))
        let data = await res.json()
        return data
    }

    return {
        getComics
    }
})()