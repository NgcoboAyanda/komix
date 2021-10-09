import React from 'react';
import {render} from 'react-dom'

//base css file
import './index.css'
//App entry point
import App from './Components/App';


render(
    <App/>,
    document.querySelector('#root')
)