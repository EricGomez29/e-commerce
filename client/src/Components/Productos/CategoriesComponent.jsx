import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PieDePagina from '../PieDePagina';

export default function Categorias({ funcion }) {
    const [data, setData] = useState( [] );


    useEffect(() => {
        funcion("palabraClave")
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
                                <Link to={`/products/search/category/${p.name}`}>
                                    <button className="btn btn-outline-primary btn-sm" style={{margin: "5px"}}>{p.name}</button>
                                </Link>
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