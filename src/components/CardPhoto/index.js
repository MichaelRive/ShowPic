import React, { useEffect, useState } from 'react'
import './index.css'
import {url} from '../utilities/APIurl'
import { corre } from '../FormInicio'
import { getEmail } from '../../clase'
import {setEmail} from '../../clase'

export const CardPhoto = ({info}) => {
    const [usuario, setUsuario] = useState({})
    const getUsuario = async () => {
        const url1 = url+`usuarios/buscar_usuario/`+info.propietario
        const resp = await (await(fetch(url1))).json()
        const {usuario} = resp;
        setUsuario(usuario)
    }
    const correo = getEmail()
    console.log("esto"+correo.email);
    useEffect(() => {
        getUsuario()
    }, [])

    return (
        <div className="lista">
            <a href=""><img src={url+"publicaciones/get_image/"+info.url} /></a>
            <img id="img-perfil" src={usuario.url_foto_perfil} /> {usuario.usuario}
            <h2>{info.descripcion}</h2>
            <h3>Categoría: {info.tag}.</h3>
            
        </div>
    )
}
