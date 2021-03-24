import React from 'react'
import { Sidebar } from './Sidebar'
import '../assets/css/Maincontainer.css'
import { Add } from './Add'
import { Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { Storymenu } from './Storymenu'

export const Maincontainer = () => {
    return (
            <div id="main-container">
                <Router>
                    <Sidebar/>
                    <Route path="/inicio" component={Storymenu}/> 
                    <Route path="/agregar" component={Add}/>
                </Router>
            </div>
    )
}
