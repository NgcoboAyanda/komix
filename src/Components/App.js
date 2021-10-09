import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import './App.css'//CSS file

import Header from './Header/Header' //Header component
import HomePage from './Pages/Homepage/HomePage'
import ResultsPage from './Pages/ResultsPage/ResultsPage'



const App = () =>{
    return(
        <div className="app-container">
            <Header/>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <HomePage/>
                    </Route>
                    <Route path="/results?q=:query">
                        <ResultsPage/>
                    </Route>
                </Switch> 
            </Router>
            
        </div>
    )
}

export default App