import React from 'react'
import { CardPhoto } from '../CardPhoto/index.js'
import './index.css'

export const ListPhotos = ({data}) => {
    return (
        <div className="galeria">
                    {data.map(info => {
                        return (
                            <CardPhoto key={info.id} info={info} />
                        )
                    })}
        </div>
    )
}
