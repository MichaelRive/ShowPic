import React from 'react'
import { Sidebar } from './Sidebar'
import '../assets/css/Maincontainer.css'
import { Add } from './Add'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { Storymenu } from './Storymenu'
import { SearchPhoto } from './SearchPhoto/'
import { EditPhoto } from './EditPhoto/'
import { Config } from './Config/'
import { Containerinicio } from './Containerinicio'
import { FormInicio } from './FormInicio'

export const Maincontainer = () => {
    return (
            <div id="main-container">
                <Router>
                    <Sidebar/>
                    <Switch>
                    <Route path="/showpic/inicio" exact component={Storymenu}/> 
                    <Route path="/showpic/agregar" exact component={Add}/>
                    <Route path="/showpic/buscar" exact component={SearchPhoto}/>
                    <Route path="/showpic/editar" exact component={EditPhoto}/>
                    <Route path="/showpic/configuracion" exact component={Config}/>
                    </Switch>
                </Router>
                
            </div>
    )
}
