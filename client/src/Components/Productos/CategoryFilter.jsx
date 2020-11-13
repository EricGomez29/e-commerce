import React, { useEffect } from 'react';
import Cards from './Cards';
import PieDePagina from '../PieDePagina';

export function SearchProductsCategories({ name, funcion, prods }) {

    useEffect(() => {
        funcion(name)
    }, [])

    return (
        <div>
            <Cards products={prods} />
            <PieDePagina />
        </div>
    )
}