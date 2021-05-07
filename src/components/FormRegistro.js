import React from 'react'
import '../assets/css/FormRegistro.css';
import { Link } from 'react-router-dom'
export const FormRegistro = () => {
    return (
        <div>
            <div className="logo">
            <img src="https://i.imgur.com/HILDEnL.png" width="500px" height="328px" alt="nose"/>
            </div>
            <div className="f3">
            <form className="registro" method="POST">
                <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo Electr&oacute;nico</label>
                    <input type="email" className="form-control" id="correo"/>

                </div>
                <br/>
                <div className="mb-3">
                    <label htmlFor="usuario" className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="usuario"/>
                </div>
                <br/>
                <div className="mb-3">
                    <label htmlFor="pass" className="form-label">Contrase&ntilde;a</label>
                    <input type="password" className="form-control" id="pass"/>
                </div>
                <br/>
                <div className="mb-3">
                    <label htmlFor="pass2" className="form-label">Confirmar Contrase&ntilde;a</label>
                    <input type="password" className="form-control" id="pass2"/>
                </div>
                <br/>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="accept"/>
                    <label className="form-check-label" htmlFor="accept">Acepto los t&eacute;rminos y condiciones</label>
                </div>
                <br/>
                <Link to="/showpic">
                <button type="submit" className="btn btn-primary">Registrarme</button>
                </Link>
            </form>
        </div>
        </div>
        
        
    )
}
