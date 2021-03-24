import React from 'react'
import '../assets/css/FormRegistro.css';
import { Link } from 'react-router-dom'
export const FormRegistro = () => {
    return (
        <div>
            <div class="logo">
            <img src="https://i.imgur.com/HILDEnL.png" width="500px" height="328px" alt="nose"/>
            </div>
            <div class="f3">
            <form class="registro">
                <div class="mb-3">
                    <label for="correo" class="form-label">Correo Electr&oacute;nico</label>
                    <input type="email" class="form-control" id="correo"/>

                </div>
                <br/>
                <div class="mb-3">
                    <label for="usuario" class="form-label">Usuario</label>
                    <input type="text" class="form-control" id="usuario"/>
                </div>
                <br/>
                <div class="mb-3">
                    <label for="pass" class="form-label">Contrase&ntilde;a</label>
                    <input type="password" class="form-control" id="pass"/>
                </div>
                <br/>
                <div class="mb-3">
                    <label for="pass2" class="form-label">Confirmar Contrase&ntilde;a</label>
                    <input type="password" class="form-control" id="pass2"/>
                </div>
                <br/>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="accept"/>
                    <label class="form-check-label" for="accept">Acepto los t&eacute;rminos y condiciones</label>
                </div>
                <br/>
                <Link to="/showpic">
                <button type="submit" class="btn btn-primary">Registrarme</button>
                </Link>
            </form>
        </div>
        </div>
        
        
    )
}
