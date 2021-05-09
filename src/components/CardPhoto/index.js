import React, { useEffect, useState } from 'react'
import './index.css'

export const CardPhoto = ({info}) => {
    const [usuario, setUsuario] = useState({})

    const getUsuario = async () => {
        const url = `http://localhost:2021/usuarios/buscar_usuario/`+info.propietario
        const resp = await (await(fetch(url))).json()
        const {usuario} = resp;
        setUsuario(usuario)
    }

    useEffect(() => {
        getUsuario()
    }, [])

    return (
        <div className="lista">
            <a href=""><img src={info.url} /></a>
            <img id="img-perfil" src={usuario.url_foto_perfil} /> {usuario.usuario}
            <h2>{info.descripcion}</h2>
            <h3>Categoría: {info.tag}.</h3>
        </div>
    )
}
