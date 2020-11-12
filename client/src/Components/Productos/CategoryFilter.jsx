import React, { useEffect, useState } from 'react';
import Cards from './Cards';

export function SearchProductsCategories({ name, funcion, prods }) {

    useEffect(() => {
        funcion(name)
    }, [])

    return (
        <div>
            <Cards products={prods} />
        </div>
    )
}