import React, { useEffect, useState } from 'react'
import  '../assets/css/FormInicio.css';
import { BrowserRouter, Link, Redirect, Router, useHistory } from 'react-router-dom'
import { render } from 'react-dom/cjs/react-dom.development';
import history from './history'

export const FormInicio = () => {
    const [corre, setCorre] = useState("")
    const [contra, setContra] = useState("")
    const [user, setUser] = useState({})
    const [login, setLogin] = useState(false)

    const onClickButton = async(event) =>{
        event.preventDefault()
        const url = `http://localhost:2021/usuarios/buscar_usuario_por_correo/`+corre
        const resp = await (await(fetch(url))).json()
        const usuario = resp.usuario
        setUser(usuario)
        if(user.length == 0){
            console.log('Correo no existe');
        }else{
            if(user.contrasena != contra){
                console.log('Contraseña incorrecta');
                window.postMessage()
            }else{
                console.log('contraseña valida');
                setLogin(true)
                window.location.reload()
            } 
        }
    }
    if(login){
         history.push('/showpic/inicio')
    }
    
    
    return (

        <div className="forminicio">
             <div className="logo">
            <img src="https://i.imgur.com/HILDEnL.png" width="500px" height="328px" alt="nose"/>
            </div>
            <div className="f2">
            <form className="formulario">
                <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo Electr&oacute;nico</label>
                    <input type="email" className="form-control" id="correo" onChange={({target: {value}}) => setCorre(value)}/>
                </div>
                <br/>
                <div className="mb-3">
                    <label htmlFor="pass" className="form-label">Contrase&ntilde;a</label>
                    <input type="pass" className="form-control" id="pass" onChange={({target:{value}})=> setContra(value)}/>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary" onClick={onClickButton}>Iniciar Sesi&oacute;n</button>
                
            </form>
            <br/>
            <div className="registro">
            <Link to="/registro">¿No tienes una cuenta?, registrate aqu&iacute;</Link> 
            </div>
            </div>
        </div>


    )
}
