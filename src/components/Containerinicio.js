import React from 'react'
import { Route, Switch } from 'react-router'
import '../assets/css/Maincontainer.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { FormRegistro } from './FormRegistro'
import { FormInicio } from './FormInicio'
import { Maincontainer } from './Maincontainer'

export const Containerinicio = () => {
    return (
            <div id="main-container">
                <Router>
                <Switch>
                <Route path="/" exact component={FormInicio}/> 
                <Route path="/registro" exact component={FormRegistro}/> 
                <Route path="/showpic" exact component={Maincontainer}/> 
                </Switch>
                  
                </Router>
            </div>
    )
}
