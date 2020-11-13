import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import PieDePagina from '../PieDePagina';

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
            <div className="jumbotron">
                <h1 className="display-3">Categorias</h1>
                <p className="lead">En este sector puedes seleccionar la categoría del producto que estas buscando</p>
                <hr className="my-4" />
                <div className="dropdown">
                <div className="form-group">
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
            <PieDePagina />
        </div>
    )
}