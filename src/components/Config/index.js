import React from 'react'
import './index.css'
import logo from '../../assets/images/logo.png'

export const Config = () => {
    return (
        <div id="cont-config">
            <div id="panel-config">
                <div className="cont" id="cont-user">
                    <div id="cont-img">
                        <button id="btn-img"><img id="img-user" src={logo} width="100px" height="100px" alt="" /></button>
                    </div>
                    <div id="cont-nomUser">
                        <h1>Nombre Usuario</h1>
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
                            <input className="input-config" type="text" defaultValue="Nombre" />
                        </div>
                    </div><br />
                    <div className="cont" id="cont-nom_User">
                        <div id="label-nom_User">
                            <h2 className="label-config">Nombre usuario: </h2>
                        </div>
                        <div id="input-nom_User">
                            <input className="input-config" type="text" defaultValue="Nombre usuario" />
                        </div>
                    </div><br />
                    <div className="cont" id="cont-config-correo">
                        <div id="label-correo">
                            <h2 className="label-config">Correo: </h2>
                        </div>
                        <div id="input-correo">
                            <input className="input-config" type="text" placeholder="Correo" />
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
