import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {

    const { loading, data:images } = useFetchGifs(categoria);

    return (
        <>
            <h3 className="animate__animated animate__fadeInTopLeft">{categoria}</h3>
            {loading && <p>Cargando...</p>}
            <div className="card-grid">
                {
                    images.map(image => {
                        return <GifGridItem
                            key={image.id}
                            {...image} />
                    })
                }
            </div>
        </>
    )
}
