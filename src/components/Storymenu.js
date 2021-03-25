import React from 'react'
import { Storycard } from './Storycard'
import '../assets/css/Storymenu.css'

export const Storymenu = () => {
    return (
        <div id="main-feed">
            <h1> Bienvenido</h1>
            <h1> Usuario</h1>
            <div id="galeria-inicio">
                <ul>
                    <li>
                        <Storycard />
                    </li>
                </ul>
            </div>

        </div>
    )
}
