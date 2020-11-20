import React, { useEffect } from 'react';
import Cards from './Cards';
import PieDePagina from '../PieDePagina';

export function SearchProductsCategories({ name, funcion, prods }) {

    useEffect(() => {
        funcion(name)
    }, [])
    
    if(prods.length === 0) {
        return (
            <div style={{marginTop: "150px"}}>
                <h1 style={{paddingBottom: "10px"}}>
                    Cargando
                </h1>
                <div className="spinner-border text-dark" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div>
            <Cards products={prods} />
            <PieDePagina />
        </div>
    )
}