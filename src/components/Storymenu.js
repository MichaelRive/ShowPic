import React, {useState, useEffect} from 'react'
import { Storycard } from './Storycard'
import '../assets/css/Storymenu.css'

import {url} from '../components/utilities/APIurl'

export const Storymenu = () => {
    const [historias, setHistorias] = useState([]);
    const getHistorias=async()=>{
        const listar= url+"publicaciones/listar_publicaciones";
        const resp = await fetch(listar);
        const historias = await resp.json();
        const {publicaciones} = historias
        setHistorias(publicaciones);
    }
    useEffect(() => {
        getHistorias();
    }, [])
    console.log(historias)
    return (
        <div id="main-feed">
            <h1> Bienvenido</h1>
            <h1> Usuario</h1>
            <div id="galeria-inicio">
                <ul>
                    {historias.map(historia=>(
                        <h1>{historia._id}</h1>
                    ))}
                </ul>
            </div>

        </div>
    )
}
