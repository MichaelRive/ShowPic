import React, { useState } from 'react'
import './index.css'
import {url} from '../utilities/APIurl'
import { useForm } from '../hooks/useForm';
import Axios from 'axios';
import Swal from 'sweetalert2';

export const CardPhotoEdit = ({ info }) => {
    const [form, handleInputChange]=useForm({
        descripcion: info.descripcion,
        tag: info.tag,
        es_publico: info.es_publico
    });

    const {descripcion, tag, es_publico}=form;
    const [file, setFile] =useState({});
    const [{src, alt}, setImage] = useState({src: url+"publicaciones/get_image/"+info.url, alt:'Seleccione una imagen'})
    const handleImg=(e)=>{
        if(e?.target?.files[0]){
            setImage({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });
        }
        setFile(e.target.files[0]);
    }

    const guardar=(e)=>{
        e.preventDefault();
        console.log(descripcion,tag,es_publico);
        const postear=url+"publicaciones/actualizar_publicacion/"+info._id;
        console.log(postear);

        const formdata=new FormData();
        if(file.length > 0 ){
            formdata.append('file0',file,file?.name);
        }
        formdata.append('descripcion',descripcion);
        formdata.append('tag',tag);
        formdata.append('es_publico',es_publico);
        formdata.append('propietario',info.propietario);
        const eje = {
            'file0' : file.name,
            'descripcion' : descripcion,
            'tag' : tag,
            'es_publico' : es_publico,
            'propietario' : info.propietario
        }
        console.log(eje);
        Axios.put(postear,formdata).then(resp=>{
            console.log(resp);
            //setEstado(true);
            Swal.fire(
                'Publicacion guardada exitosamente'
            )
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="lista-edit">
            <button type="file" id="btn-image" name="file0" accept="image/*" ><img src={src} /></button>
            <input type="file" name="file0" id="file0" accept="image/*" onChange={ handleImg } />
            <input name="textoarea" className="text-area" type="text" onChange={handleInputChange} value={descripcion}></input>
            <div className="cate">
                <h3>Categoría:</h3>
                <select id="selector" name="tag" onChange={handleInputChange} value={tag}>
                        <option value=" ">----</option>
                        <option value="Amor">Amor</option>
                        <option value="TBT">TBT</option>
                        <option value="Art">Art</option>
                        <option value="Fotografia">Fotografía</option>
                        <option value="Naturaleza">Naturaleza</option>
                        <option value="Inspiracion">Inspiracion</option>
                        <option value="Moderno">Moderno</option>
                </select>
            </div>
            <input name="es_publico" type="checkbox" value={es_publico} onChange={handleInputChange} defaultChecked={!es_publico}/>
                    <label className="label" htmlFor="privado"> Privado</label><br />
            <div id="botones">
                    <button id="btn-aceptar" onClick={guardar}>Aceptar</button>
                    <button id="btn-eliminar"><i className="material-icons" id="i-delete" >delete</i></button>
            </div>
        </div>
    )
}
