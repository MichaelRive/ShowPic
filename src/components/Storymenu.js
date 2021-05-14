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

    const [usuario, setUsuario] = useState({})
    const getSesion = async()=>{
        let url1 = url + "sesion/ver_sesion";
        let resp = await (await(fetch(url1))).json()
        const em = resp.sesion.correo

        url1 = url + "usuarios/buscar_usuario_por_correo/" + em
        resp = await (await(fetch(url1))).json()
        setUsuario(resp.usuario)
        const id = usuario._id;
        console.log(usuario);
    }

    useEffect(() => {
        getSesion()
    }, [])
    return (
        <div id="main-feed">
            <h1> Bienvenido</h1>
            <h1> {usuario.nombre}</h1>
            <div id="galeria-inicio">
                    {historias.map(historia=>(
                            <Storycard key={historia._id} historia={historia}/>
                    ))}
            </div>

        </div>
    )
}
