import React, { useState } from 'react'
import Searchbox from '../../../Utitilies/Searchbox/Searchbox'

import './ResultsPage.css'

const ResultsPage = ()=>{
    const[searchTerm, setSearchTerm] = useState('')

    return(
        <div className="results_page">
            <div className="logo"></div>
            <form className="results_page-searchbox">
                <Searchbox value={searchTerm} onChange={setSearchTerm}/>
            </form>
        </div>
    )
}

export default ResultsPage