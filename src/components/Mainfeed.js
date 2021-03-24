import React from 'react'
import { Storymenu } from './Storymenu'
import '../assets/css/Mainfeed.css'
import { Search } from './Search'

export const Mainfeed = () => {
    return (
        <div id="main-feed">
            <Storymenu/>
            <Search/>
        </div>
    )
}
