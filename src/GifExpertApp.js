import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Spiderman']);

    // const handleAdd = () => {
    //     setCategorias([...categorias, 'Batman']);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias}></AddCategory>
            <hr></hr>
            <ol>
                {
                    categorias.map(categoria =>
                        <GifGrid
                            key={categoria}
                            categoria={categoria}
                        ></GifGrid>
                    )
                }
            </ol>
        </>
    );
};

export default GifExpertApp;