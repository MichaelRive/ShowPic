import React from 'react'
import { Sidebar } from './Sidebar'
import '../assets/css/Maincontainer.css'
import { Add } from './Add'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { Storymenu } from './Storymenu'
import { SearchPhoto } from './SearchPhoto/'
import { EditPhoto } from './EditPhoto'

export const Maincontainer = () => {
    return (
            <div id="main-container">
                <Router>
                    <Sidebar/>
                    <Switch>
                    <Route path="/showpic/inicio" component={Storymenu}/> 
                    <Route path="/showpic/agregar" component={Add}/>
                    <Route path="/showpic/buscar" component={SearchPhoto}/>
                    <Route path="/editar" component={EditPhoto}/>
                    </Switch>
                </Router>
            </div>
    )
}
