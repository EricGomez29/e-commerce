import React, { useEffect, useState } from 'react';
import { OrdenarPrecioDes } from '../NavBar/Filter';
import axios from 'axios';
import Cards from './Cards';

export function SearchProductsCategories({ name, funcion, prods }) {
    console.log(name)

    
    useEffect(() => {
        funcion(name)
    }, [])


    // const [data, setData] = useState( [] );

    // useEffect(() => {
    //     axios.get(`http://localhost:3001/api/categories/${name}`)
    //         .then(data => {
    //             setData(data.data.resultados)
    //         })
    // }, [])


    return (
        <div>
            {/* <OrdenarPrecioDes products={prods}/> */}
            <Cards products={prods} />
        </div>
    )
}