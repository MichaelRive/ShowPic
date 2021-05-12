import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Sidebar.css'
import logo from '../assets/images/logo.png'
import {url} from './utilities/APIurl'

export const Sidebar = () => {
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
        <div id="user-container">
            <div>
                <div id="container">
                    <img id="profile-img" src={usuario.url_foto_perfil} width="200" height="200" alt=""/>
                    <h3 style={{color:"#d6d6d6"}}>{usuario.nombre}</h3>
                </div>
            </div>
            <div id="option-menu">
                <br/>
                <Link className="hvr-bounce-to-right" to="/showpic/inicio"><i className="material-icons">home</i>Inicio</Link>
                <br/>
                <Link className="hvr-bounce-to-right" to="/showpic/buscar"><i className="material-icons">image_search</i> Buscar Foto</Link>
                <br/>
                <Link className="hvr-bounce-to-right" to="/showpic/agregar"><i className="material-icons">add_circle</i> Agregar Foto</Link>
                <br/>
                <Link className="hvr-bounce-to-right" to="/showpic/editar"><i className="material-icons">brush</i> Editar Foto</Link>
                <br/>
                <br/>
                <br/>
                <Link className="hvr-bounce-to-right" to="/showpic/configuracion"><i className="material-icons">settings</i> Configuración</Link><br/>
                {/* <Link className="hvr-bounce-to-right" to=""><i className="material-icons">exit_to_app</i> Cerrar Sesión</Link><br/> */}
                <a href="/" className="hvr-bounce-to-right"><i className="material-icons">exit_to_app</i> Cerrar Sesión</a><br/>
            </div>
        </div>
    )
}
