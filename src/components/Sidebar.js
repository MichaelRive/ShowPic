import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Sidebar.css'

export const Sidebar = () => {
    return (
        <div id="user-container">
            <div>
                <div id="container">
                    <img id="profile-img" src="https://i.imgur.com/HILDEnL.png" width="200" height="200" alt=""/>
                    <h3 style={{color:"#d6d6d6"}}>Nombre Usuario</h3>
                </div>
            </div>
            <div id="option-menu">
                <Link className="hvr-bounce-to-right" to="/inicio"><i className="material-icons">home</i>Inicio</Link>
                <br/>
                <br/>
                <Link className="hvr-bounce-to-right" to="/buscar"><i className="material-icons">image_search</i> Buscar Foto</Link>
                <br/>
                <br/>
                <Link className="hvr-bounce-to-right" to="/agregar"><i className="material-icons">add_circle</i> Agregar Foto</Link>
                <br/>
                <br/>
                <Link className="hvr-bounce-to-right" to="/editar"><i className="material-icons">brush</i> Editar Foto</Link>
                <br/>
                <br/>
                <br/>
                <a href="./" className="hvr-bounce-to-right"><i className="material-icons">settings</i> Configuración</a><br/><br/>
                <a href="./" className="hvr-bounce-to-right"><i className="material-icons">exit_to_app</i> Cerrar Sesión</a><br/>
            </div>
        </div>
    )
}
