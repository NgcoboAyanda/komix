import React, {useEffect, useState} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import './App.css'//CSS file
import ComicPage from './Pages/ComicPage/ComicPage'

import HomePage from './Pages/Homepage/HomePage'
import ResultsPage from './Pages/ResultsPage/ResultsPage'


const App = () =>{
    useEffect(
        ()=>{
            console.log('booted up')
        }
        ,[]
    )

    return(
        <div className="app-container">

            {/* Page routes */}
            <Router basename={process.env.PUBLIC_URL} >
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/search" component={ResultsPage}/>
                    <Route exact path="/comic/:id" component={ComicPage} />
                </Switch> 
            </Router>
            
        </div>
    )
}

export default App