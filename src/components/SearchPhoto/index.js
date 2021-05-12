import React, { useEffect, useState } from 'react'
import { ListPhotos } from '../ListPhotos/'
import './index.css'
import data from '../../assets/data/data.json'
import { url } from '../utilities/APIurl'

export const SearchPhoto = () => {
    const [text, setText] = useState("");
    const [info, ] = useState(data);
    const [publicaciones, setPublicaciones] = useState([])
    const [infoFilter, setInfoFilter] = useState([]);

    const getPublicaciones= async ()=>{
        const url1 = url+"publicaciones/listar_publicaciones"
        const resp = await (await(fetch(url1))).json()
        const {publicaciones} = resp
        setPublicaciones(publicaciones)
        setInfoFilter(publicaciones)
    }
    
    const OnBuscar = (text) =>{
        
        if(publicaciones?.length && text.length > 1){
            const textMinus = text.toLowerCase();
            const filteredData = publicaciones.filter((value) => {
                return(
                    value.tag.toLowerCase().includes(textMinus)
                )
            })
            setInfoFilter(filteredData);
        }else{
            setInfoFilter(publicaciones)
        }
    }
    useEffect(() => {
        getPublicaciones();

    }, [])
    return (
        <div>
            <div id="main-feed">
                <h1 id="titulo-buscar"> Buscar foto</h1>
                <div id="ctn-bars-search">
                    <input type="text" id="inputSearch" placeholder="Categoría"  
                    onChange={({target: {value}}) => setText(value) + (OnBuscar(text))} />
                </div>
                <div id="cont-galeria">
                <ListPhotos data={infoFilter}/>
                </div>
                
            </div>
        </div>
    )
}
