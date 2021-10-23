import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import {useState} from 'react'

import './App.css'//CSS file

import SideMenu from './SideMenu/SideMenu'
import Header from './Header/Header' //Header component
import HomePage from './Pages/Homepage/HomePage'
import ResultsPage from './Pages/ResultsPage/ResultsPage'


const App = () =>{
    const[menuVisible, setMenuVisible] = useState(false)

    const toggleMenuVisibility = ()=>{
        setMenuVisible(!menuVisible)
    }

    return(
        <div className="app-container">
            {/* Menu that will be opened by hamburgerr menu.. For mobiles */} 
            <SideMenu visible={menuVisible} toggleVisible={toggleMenuVisibility} />

            {/* Page routes */}
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <HomePage menuVisible={menuVisible} setMenuVisible={setMenuVisible} exact/>
                    </Route>
                    <Route path="/search" component={ResultsPage} exact/>
                </Switch> 
            </Router>
            
        </div>
    )
}

export default App