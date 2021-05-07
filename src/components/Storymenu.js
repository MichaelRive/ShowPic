import React, {useState, useEffect} from 'react'
import { Storycard } from './Storycard'
import '../assets/css/Storymenu.css'

import {url} from '../components/utilities/APIurl'

export const Storymenu = () => {
    const [historias, setHistorias] = useState([]);
    const getHistorias=async()=>{
        const listar= url+"publicaciones/listar_publicaciones_public";
        const resp = await fetch(listar);
        const historias = await resp.json();
        const {publicaciones} = historias;
        setHistorias(publicaciones);
    }
    useEffect(() => {
        getHistorias();
    }, [])
    return (
        <div id="main-feed">
            <h1> Bienvenido</h1>
            <h1> Usuario</h1>
            <div id="galeria-inicio">
                <ul>
                    {historias.map(historia=>(
                        <li key={historia._id}>
                            <Storycard key={historia._id} historia={historia}/>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
