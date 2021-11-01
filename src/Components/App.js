import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import './App.css'//CSS file

import HomePage from './Pages/Homepage/HomePage'
import ResultsPage from './Pages/ResultsPage/ResultsPage'


const App = () =>{

    return(
        <div className="app-container">

            {/* Page routes */}
            <Router basename={process.env.PUBLIC_URL} >
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/search" component={ResultsPage}/>
                </Switch> 
            </Router>
            
        </div>
    )
}

export default App