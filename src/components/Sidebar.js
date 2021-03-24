import React from 'react'
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
                <a href="./inicio" className="hvr-bounce-to-right"><i className="material-icons">home</i>Inicio</a>
                <br/>
                <br/>
                <a href="./buscar" className="hvr-bounce-to-right"><i className="material-icons">image_search</i> Buscar Foto</a><br/>
                <br/>
                <a href="agregar.html" className="hvr-bounce-to-right"><i className="material-icons">add_circle</i> Agregar Foto</a><br/><br/>

                <a href="editar_foto.html" className="hvr-bounce-to-right"><i className="material-icons">brush</i> Editar Foto</a><br/><br/>
                <br/>
                <a href="./" className="hvr-bounce-to-right"><i className="material-icons">settings</i> Configuración</a><br/><br/>
                <a href="./" className="hvr-bounce-to-right"><i className="material-icons">exit_to_app</i> Cerrar Sesión</a><br/>
            </div>
        </div>
    )
}
