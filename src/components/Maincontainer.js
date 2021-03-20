import React from 'react'
import { Sidebar } from './Sidebar'
import '../assets/css/Maincontainer.css'
import { Mainfeed } from './Mainfeed'
import { Search } from './Search'

export const Maincontainer = () => {
    return (
            <div id="main-container">
                <Sidebar/>
                <Mainfeed/>
            </div>
    )
}
