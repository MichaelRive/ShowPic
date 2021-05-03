import React from 'react'
<<<<<<< HEAD
import { Route } from 'react-router'

=======
import { Route, Switch } from 'react-router'
import '../assets/css/Maincontainer.css'
>>>>>>> c92dfa07f94a78494d0f53acc2524c5f061b272a
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
