import React, { useState } from 'react'
import { ListPhotos } from '../ListPhotos/'
import './index.css'
import data from '../../assets/data/data.json'

export const SearchPhoto = () => {
    const [text, setText] = useState("");
    const [info, setInfo] = useState(data);
    const [infoFilter, setInfoFilter] = useState(data);

    console.log(text.length)
    const OnBuscar = (text) =>{
        
        if(info?.length && text.length > 1){
            const textMinus = text.toLowerCase();
            const filteredData = info.filter((value) => {
                return(
                    value.cat.toLowerCase().includes(textMinus)
                )
            })
            setInfoFilter(filteredData);
        }else{
            setInfoFilter(data)
        }
    }
    return (
        <div>
            <div id="main-feed">
                <h1 id="titulo-buscar"> Buscar foto</h1>
                <div id="ctn-bars-search">
                    <input type="text" id="inputSearch" placeholder="Categoría"  onChange={({target: {value}}) => setText(value) + (OnBuscar(text))} />
                </div>
                <div id="cont-galeria">
                <ListPhotos data={infoFilter}/>
                </div>
                
            </div>
        </div>
    )
}
