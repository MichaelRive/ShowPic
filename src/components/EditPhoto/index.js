import React, { useEffect, useState } from 'react'
import fotos from '../../assets/data/fotos.json'
import { ListPhotosEdit } from '../ListPhotosEdit'
import {url} from '../utilities/APIurl'

export const EditPhoto = () => {
    let [usuario, setUsuario] = useState({})
    const [publicaciones, setPublicaciones] = useState([])

    const getSesion = async()=>{
        const url1 = url + "sesion/ver_sesion";
        const resp = await (await(fetch(url1))).json()
        console.log(resp);
        const em = resp.sesion.correo

        const url2 = url + "usuarios/buscar_usuario_por_correo/" + em
        const resp2 = await (await(fetch(url2))).json()
        console.log(resp2);
        console.log(resp2.usuario);
        usuario = resp2.usuario
        console.log(usuario);

        const url3 = url + "publicaciones/buscar_publicacion_propietario/"+ usuario._id
        console.log(url3);
        const resp3 = await (await(fetch(url3))).json()
        console.log(resp3);
        console.log(resp3.publicaciones);
        setPublicaciones(resp3.publicaciones)
        console.log(publicaciones);
    }

    useEffect(() => {
        getSesion()
    },[1])
    return (
        <div>
            <div id="main-feed">
                <h1 id="titulo-tus-fotos"> Tus Fotos</h1>
                
                <div id="cont-galeria">
                <ListPhotosEdit data={publicaciones}/>
                </div>
                
            </div>
        </div>
    )
}
