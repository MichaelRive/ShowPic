import React, {useState, useEffect} from 'react'
import '../assets/css/Storycard.css'
import {url} from '../components/utilities/APIurl'
export const Storycard = ({historia}) => {
    const [usuario, setUsuario] = useState({});
    const getUsuario=async()=>{
        const buscar_usuario= url+"usuarios/buscar_usuario/"+historia.propietario;
        const resp = await fetch(buscar_usuario);
        const info = await resp.json();
        const {usuario} = info;
        setUsuario(usuario);
    }
    useEffect(() => {
        getUsuario();
    }, [])
    return (
        <div className="story-card">
            <a href="./"><img className="imagen-principal" src={url+"publicaciones/get_image/"+historia.url} alt=""/></a>
            <img className="imagen-perfil" src={usuario.url_foto_perfil} alt=""/> 
            <h1>{usuario.nombre}</h1>
            <h2>{historia.descripcion}</h2>
            <h3>Categoría: {historia.tag}</h3>
        </div>
    )
}