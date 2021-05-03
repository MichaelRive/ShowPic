import React from 'react'
import { CardPhotoEdit } from '../CardPhotoEdit'

export const ListPhotosEdit = ({data}) => {
    return (
        <div className="galeria">
                    {data.map(info => {
                        return (
                            <CardPhotoEdit key={info.id} info={info} />
                        )
                    })}
        </div>
    )
}
