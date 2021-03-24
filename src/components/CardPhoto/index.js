import React from 'react'
import './index.css'

export const CardPhoto = ({info}) => {
    

    return (
        <div className="lista">
            <a href=""><img src={info.photo} /></a>
            <img id="img-perfil" src={info.photoUser} /> {info.nameUser}
            <h2>{info.descrip}</h2>
            <h3>Categoría: {info.cat}.</h3>
        </div>
    )
}
