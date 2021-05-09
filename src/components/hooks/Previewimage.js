import React, { useState } from 'react'
import '../../assets/css/Add.css'
import {url} from '../utilities/APIurl'
export const Previewimage = () => {

    const [{src, alt}, setImage] = useState({src: '', alt:'Seleccione una imagen'})
    const handleImg=(e)=>{
        e.preventDefault()
        if(e.target.files[0]){
            setImage({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });
        }
    }
    const subirImagen=async()=>{
        const postear=url+"/publicaciones/upload_image/608ddf182cd0522014e8ca7d";
        const resp = await fetch(postear);
        console.log(resp);
    }
    return (
        <div>
            <h1 id="title"> Agregar Foto</h1>
            <form method="POST" encType="multipart/form-data" action={subirImagen()}>
                <div className="add-container">
                    <img id="preview" src={src} alt={alt}></img><br/>
                    <input type="file" name="file0" id="file0" accept="image/*" onChange={handleImg} />
                    <br />
                    <label className="label" htmlFor="descripcion"> Agrega Descripcion</label><br />
                    <input name="descripcion" className="descripcion " type="text" id="descripcion" placeholder="descripcion" /><br />
                    <label className="label" htmlFor="tag"> Tag</label><br />
                    <select name="tag">
                        <option value="Amor">Amor</option>
                        <option value="TBT">TBT</option>
                        <option value="Art">Art</option>
                        <option value="Fotografia">Fotografía</option>
                        <option value="Naturaleza">Naturaleza</option>
                        <option value="Inspiracion">Inspiracion</option>
                    </select> <br />
                    <input name="es_privado" type="checkbox" value="es_privado" />
                    <label className="label" htmlFor="privado"> Privado</label><br />
                    <input className="Button2" name="postear" type="submit" value="Postear Foto" />
                </div>
            </form>
        </div>
    )
}
