import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Sidebar.css'
import logo from '../assets/images/logo.png'

export const Sidebar = () => {
    return (
        <div id="user-container">
            <div>
                <div id="container">
                    <img id="profile-img" src={logo} width="200" height="200" alt=""/>
                    <h3 style={{color:"#d6d6d6"}}>Nombre Usuario</h3>
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
                <a href="./" className="hvr-bounce-to-right"><i className="material-icons">settings</i> Configuración</a><br/>
                <a href="./" className="hvr-bounce-to-right"><i className="material-icons">exit_to_app</i> Cerrar Sesión</a><br/>
            </div>
        </div>
    )
}
