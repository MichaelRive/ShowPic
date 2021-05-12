import React, { useEffect, useState } from 'react';
import '../../assets/css/Add.css';
import Axios from 'axios';
import Swal from 'sweetalert2';
import {url} from '../utilities/APIurl';
import { useForm } from './useForm';
export const Previewimage = () => {

    const [form, handleInputChange]=useForm({
        descripcion:"",
        tag:"",
        es_publico: true
    });

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

    const [estado, setEstado]= useState(false);
    const guardar=(e)=>{
        e.preventDefault();
        console.log(descripcion,tag,es_publico);
        const postear=url+"publicaciones/upload_image/"+usuario._id;
        console.log(postear);

        const formdata=new FormData();
        formdata.append('file0',file,file.name);
        formdata.append('descripcion',descripcion);
        formdata.append('tag',tag);
        formdata.append('es_publico',es_publico);
        formdata.append('propietario',usuario._id);
        console.log(file.name);
        Axios.post(postear,formdata).then(resp=>{
            console.log(resp);
            setEstado(true);
        }).catch(err=>{
            console.log(err)
        })
        Swal.fire(
            'Publicacion guardada exitosamente'
        )
    }

    const {descripcion, tag, es_publico}=form;
    const [file, setFile] =useState({});
    const [{src, alt}, setImage] = useState({src: '', alt:'Seleccione una imagen'})
    const handleImg=(e)=>{
        if(e.target.files[0]){
            setImage({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });
        }
        setFile(e.target.files[0]);
    }
    return (
        <div>
            <h1 id="title"> Agregar Foto</h1>
            <form onSubmit={guardar}>
                <div className="add-container">
                    <img id="preview" src={src} alt={alt}></img><br/>
                    <input type="file" name="file0" id="file0" accept="image/*" onChange={ handleImg } />
                    <br />
                    <label className="label" htmlFor="descripcion"> Agrega Descripcion</label><br />
                    <input name="descripcion" className="descripcion " type="text" id="descripcion" placeholder="descripcion" onChange={handleInputChange} value={descripcion}/><br />
                    <label className="label" htmlFor="tag"> Tag</label><br />
                    <select name="tag" onChange={handleInputChange} value={tag}>
                        <option value=" ">----</option>
                        <option value="Amor">Amor</option>
                        <option value="TBT">TBT</option>
                        <option value="Art">Art</option>
                        <option value="Fotografia">Fotografía</option>
                        <option value="Naturaleza">Naturaleza</option>
                        <option value="Inspiracion">Inspiracion</option>
                    </select> <br />
                    <input name="es_publico" type="checkbox" value={es_publico} onChange={handleInputChange} defaultChecked={false}/>
                    <label className="label" htmlFor="privado"> Privado</label><br />
                    <input className="Button2" name="postear" type="submit" value="Postear Foto" />
                </div>
            </form>
        </div>
    )
}
