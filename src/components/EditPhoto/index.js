import React from 'react'
import fotos from '../../assets/data/fotos.json'
import { ListPhotosEdit } from '../ListPhotosEdit'

export const EditPhoto = () => {
    console.log();
    return (
        <div>
            <div id="main-feed">
                <h1 id="titulo-tus-fotos"> Tus Fotos</h1>
                
                <div id="cont-galeria">
                <ListPhotosEdit data={fotos}/>
                </div>
                
            </div>
        </div>
    )
}
