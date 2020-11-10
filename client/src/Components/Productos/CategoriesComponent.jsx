import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchProductsCategories } from './CategoryFilter';
import { NavLink } from 'react-router-dom';

export default function Categorias() {
    const [data, setData] = useState( [] );

    useEffect(() => {
        axios.get(`http://localhost:3001/api/categories`)
            .then(data => {
                setData(data.data.resultados)
            })
    }, [])

    return (
        <div>
            <div class="jumbotron">
                <h1 class="display-3">Categorias</h1>
                <p class="lead">En este sector puedes seleccionar la categoría del producto que estas buscando</p>
                <hr class="my-4" />
                <div class="dropdown">
                <div class="form-group">
                    {
                        data.map(p => {
                            return (
                                <NavLink to={`/products/search/category/${p.name}`}>
                                    <button className="btn btn-outline-primary btn-sm" style={{margin: "5px"}}>{p.name}</button>
                                </NavLink>
                            )
                        })
                    }
                </div>
                </div>
            </div>
        </div>
    )
}