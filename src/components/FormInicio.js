import React, { useState } from 'react'
import  '../assets/css/FormInicio.css';
import { Link } from 'react-router-dom'

export const FormInicio = () => {
        
    return (

        <div className="forminicio">
             <div className="logo">
            <img src="https://i.imgur.com/HILDEnL.png" width="500px" height="328px" alt="nose"/>
            </div>
            <div className="f2">
            <form className="formulario">
                <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo Electr&oacute;nico</label>
                    <input type="email" className="form-control" id="correo" />
                </div>
                <br/>
                <div className="mb-3">
                    <label htmlFor="pass" className="form-label">Contrase&ntilde;a</label>
                    <input type="password" className="form-control" id="pass" />
                </div>
                <br/>
            <Link to="/showpic">
                <button type="submit" className="btn btn-primary">Iniciar Sesi&oacute;n</button>
                </Link>
            </form>
            <br/>
            <div className="registro">
            <Link to="/registro">¿No tienes una cuenta?, registrate aqu&iacute;</Link> 
            </div>
            </div>
        </div>


    )
}
