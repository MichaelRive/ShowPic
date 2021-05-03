import React from 'react'
import { Route } from 'react-router'

import { BrowserRouter as Router } from 'react-router-dom'
import { FormRegistro } from './FormRegistro'
import { FormInicio } from './FormInicio'
import { Maincontainer } from './Maincontainer'

export const Containerinicio = () => {
    return (
            <div id="main-container">
                <Router>
                    
                <Route path="/" exact="true" component={FormInicio}/> 
                <Route path="/registro" exact="true" component={FormRegistro}/> 
                <Route path="/showpic" exact="true" component={Maincontainer}/> 
                
                  
                </Router>
            </div>
    )
}
