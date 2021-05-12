import React, { useEffect, useState } from 'react'
import './index.css'
import logo from '../../assets/images/logo.png'
import {url} from '../utilities/APIurl'

export const Config = () => {
    const [nombre, setnombre] = useState("")
    const [usuario, setUsuario] = useState({})
    const getSesion = async()=>{
        let url1 = url + "sesion/ver_sesion";
        let resp = await (await(fetch(url1))).json()
        const em = resp.sesion.correo

        url1 = url + "usuarios/buscar_usuario_por_correo/" + em
        resp = await (await(fetch(url1))).json()
        setUsuario(resp.usuario)
        const id = usuario._id;
        console.log(usuario);
    }

    useEffect(() => {
        getSesion()
    }, [])
    return (
        <div id="cont-config">
            <div id="panel-config">
                <div className="cont" id="cont-user">
                    <div id="cont-img">
                        <button id="btn-img"><img id="img-user" src={usuario.url_foto_perfil} width="100px" height="100px" alt="" /></button>
                    </div>
                    <div id="cont-nomUser">
                        <h1>{usuario.usuario}</h1>
                    </div>
                </div>
                <div id="label-info-personal">
                    <label id="title">Información Personal</label>
                </div>
                <div id="cont-info">
                    <div className="cont" id="cont-nom">
                        <div id="label-nom">
                            <h2 className="label-config">Nombre: </h2>
                        </div>
                        <div id="input-nom">
                            <input className="input-config" type="text" defaultValue={usuario.nombre} />
                        </div>
                    </div><br />
                    <div className="cont" id="cont-nom_User">
                        <div id="label-nom_User">
                            <h2 className="label-config">Nombre usuario: </h2>
                        </div>
                        <div id="input-nom_User">
                            <input className="input-config" type="text" defaultValue={usuario.usuario} onChange={({target: {value}})=> setnombre(value)} />
                        </div>
                    </div><br />
                    <div className="cont" id="cont-config-correo">
                        <div id="label-correo">
                            <h2 className="label-config">Correo: </h2>
                        </div>
                        <div id="input-correo">
                            <input className="input-config" type="text" defaultValue={usuario.correo} />
                        </div>
                    </div>
                    <div className="cont-button">
                        <button >Enviar</button>
                    </div>
                </div> <br />
                <div id="cont-passw">
                    <div id="label-passw">
                        <label id="title">Cambiar Contraseña</label>
                    </div>
                    <div className="cont" id="cont-old_passw">
                        <div id="label-old_pass">
                            <h2 className="label-config">Contraseña Vieja: </h2>
                        </div>
                        <div id="input-old_pass">
                            <input className="input-config" type="password" />
                        </div>
                    </div><br />
                    <div className="cont" id="cont-new_passw">
                        <div id="label-new_passw">
                            <h2 className="label-config">Contraseña Nueva: </h2>
                        </div>
                        <div id="input-new_passw">
                            <input className="input-config" type="password" />
                        </div>
                    </div><br />
                    <div className="cont" id="cont-confir_passw">
                        <div id="label-confri_passw">
                            <h2 className="label-config">Confirmar Contraseña: </h2>
                        </div>
                        <div id="input-confir_passw">
                            <input className="input-config" type="password" />
                        </div>
                    </div>
                    <div className="cont-button">
                        <button >Cambiar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
