import React from 'react'
import  '../assets/css/FormInicio.css';
import { Link } from 'react-router-dom'

export const FormInicio = () => {
    
    return (

        <div class="forminicio">
             <div class="logo">
            <img src="https://i.imgur.com/HILDEnL.png" width="500px" height="328px" alt="nose"/>
            </div>
            <div class="f2">
            <form class="formulario">
                <div class="mb-3">
                    <label for="correo" class="form-label">Correo Electr&oacute;nico</label>
                    <input type="email" class="form-control" id="correo" />
                </div>
                <br/>
                <div class="mb-3">
                    <label for="pass" class="form-label">Contrase&ntilde;a</label>
                    <input type="pass" class="form-control" id="pass" />
                </div>
                <br/>
            <Link to="/showpic">
                <button type="submit" class="btn btn-primary">Iniciar Sesi&oacute;n</button>
                </Link>
            </form>
            <br/>
            <div class="registro">
            <Link to="/registro">¿No tienes una cuenta?, registrate aqu&iacute;</Link> 
            </div>
            </div>
        </div>


    )
}
