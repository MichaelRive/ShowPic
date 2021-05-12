import React, { useEffect, useState } from 'react'
import '../assets/css/FormInicio.css';
import { url } from './utilities/APIurl';
import { BrowserRouter, Link, Redirect, Router, useHistory } from 'react-router-dom'
import history from './history'
import Axios from 'axios';


export const FormInicio = () => {
    const [corre, setCorre] = useState("")
    const [contra, setContra] = useState("")
    const [user, setUser] = useState({})
    const [login, setLogin] = useState(false)


    const onClickButton = async (event) => {
        event.preventDefault()

        let url1 = url + "sesion/ver_sesion"
        let resp = await (await (fetch(url1))).json()
        const sesionId = resp?.sesion?._id

        url1 = url + "sesion/eliminar_sesion/" + sesionId
        Axios.delete(url1).then(resp => {
            //console.log(resp);
        }).catch(err => {
            //console.log(err)
        })




        url1 = url + "usuarios/buscar_usuario_por_correo/" + corre
        resp = await (await (fetch(url1))).json()
        const usuario = resp.usuario
        setUser(usuario)
        if (usuario.length === 0) {
            console.log('Correo no existe');
        } else {
            if (usuario.contrasena !== contra) {
                console.log(contra)
                console.log('Contraseña incorrecta');
            } else {
                console.log('contraseña valida');

                url1 = url + "sesion/guardar_sesion"
                
                Axios.post(url1, {'correo':corre}).then(resp => {
                    console.log(resp);
                }).catch(err => {
                    console.log(err)
                })

                setLogin(true)
                window.location.reload()
            }
        }
    }
    if (login) {
        history.push('/showpic/inicio')
    }


    return (

        <div className="forminicio">
            <div className="logo">
                <img src="https://i.imgur.com/HILDEnL.png" width="500px" height="328px" alt="nose" />
            </div>
            <div className="f2">
                <form className="formulario">
                    <div className="mb-3">
                        <label htmlFor="correo" className="form-label">Correo Electr&oacute;nico</label>
                        <input type="email" className="form-control" id="correo" onChange={({ target: { value } }) => setCorre(value)} />
                    </div>
                    <br />
                    <div className="mb-3">
                        <label htmlFor="pass" className="form-label">Contrase&ntilde;a</label>
                        <input type="password" className="form-control" id="pass" onChange={({ target: { value } }) => setContra(value)} />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary" onClick={onClickButton}>Iniciar Sesi&oacute;n</button>

                </form>
                <br />
                <div className="registro">
                    <Link to="/registro">¿No tienes una cuenta?, registrate aqu&iacute;</Link>
                </div>
            </div>
        </div>


    )
}
