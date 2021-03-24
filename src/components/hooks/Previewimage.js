import React, { useState } from 'react'
import '../../assets/css/Add.css'

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

    return (
        <div>
            <h1 id="title"> Agregar Foto</h1>
            <form action="">
                <div className="add-container">
                    <img id="preview" src={src} alt={alt}></img><br/>
                    <input type="file" name="file" id="file" accept="image/*" onChange={handleImg} />
                    <br />
                    <label className="label" htmlFor="comentario"> Agrega Comentario</label><br />
                    <input name="comentario" className="comentario " type="text" id="comentario" placeholder="comentario" /><br />
                    <label className="label" htmlFor="tags"> Tags</label><br />
                    <select name="tags" multiple>
                        <option value="Amor">Amor</option>
                        <option value="TBT">TBT</option>
                        <option value="Art">Art</option>
                        <option value="Fotografia">Fotografía</option>
                        <option value="Naturaleza">Naturaleza</option>
                        <option value="Inspiracion">Inspiracion</option>
                    </select> <br />
                    <input name="privado" type="checkbox" value="esPrivado" />
                    <label className="label" htmlFor="privado"> Privado</label><br />
                    <input className="Button2" name="postear" type="submit" value="Postear Foto" />
                </div>
            </form>
        </div>
    )
}
