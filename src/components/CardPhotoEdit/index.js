import React from 'react'
import './index.css'

export const CardPhotoEdit = ({ info }) => {

    return (
        <div className="lista-edit">
            <a href=""><img src={info.photo} /></a>
            <textarea name="textoarea" className="text-area">{info.descrip}</textarea>
            <div className="cate">
                <h3>Categoría:</h3>
                <input defaultValue={info.cat} />
            </div>
            <div id="botones">
                    <button id="btn-aceptar">Aceptar</button>
                    <button id="btn-eliminar"><i className="material-icons" id="i-delete" >delete</i></button>
            </div>
        </div>
    )
}
