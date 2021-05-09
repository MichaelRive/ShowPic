import React, { useState } from 'react'
import '../assets/css/FormRegistro.css';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
import { url } from './utilities/APIurl';
import { useForm } from './hooks/useForm';
export const FormRegistro = () => {
    const [form, handleInputChange]=useForm({
        usuario:"",
        correo:"",
        pass:"",
        nombre:""
    })
    const [estado, setEstado] = useState(false);
    const guardarUsuario=(e)=>{
        e.preventDefault();
        const enviar=url+"usuarios/guardar_usuario"
        fetch(enviar,{method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(
            {"usuario":usuario,"correo":correo,"contrasena":pass,"nombre":nombre,"url_foto_perfil":""}
        )}).then(resp=>{
            Swal.fire(
                'Se inserto el usuario',
                usuario+" "+nombre,
                'success'
            )
            setEstado(true);
        }).catch(err=>{
            console.log(err);
        })
    }
    const {usuario, correo, pass, nombre} = form;
    if (estado){
        return <Redirect to="/"/>
    }
    return (
        <div>
            <div className="logo">
            <img src="https://i.imgur.com/HILDEnL.png" width="500px" height="328px" alt="nose"/>
            </div>
            <div className="f3">
            <form className="registro" onSubmit={guardarUsuario}>
                <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo Electr&oacute;nico</label>
                    <input type="email" className="form-control" onChange={handleInputChange} id="correo" name="correo" value={correo} />
                </div>
                <br/>
                <div className="mb-3">
                    <label htmlFor="usuario" className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="usuario" name="usuario" value={usuario} onChange={handleInputChange}/>
                </div>
                <br/>
                <div className="mb-3">
                    <label htmlFor="Nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" value={nombre} onChange={handleInputChange}/>
                </div>
                <br/>
                <div className="mb-3">
                    <label htmlFor="pass" className="form-label">Contrase&ntilde;a</label>
                    <input type="password" className="form-control" id="pass" name="pass" value={pass} onChange={handleInputChange}/>
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
                
                <button type="submit" className="btn btn-primary">Registrarme</button>
                
            </form>
        </div>
        </div>
        
        
    )
}
