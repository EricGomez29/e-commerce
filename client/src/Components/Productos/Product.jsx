import React, { useEffect } from 'react';

export default function Product({ id, funcion, prod }) {

    useEffect(() => {
        funcion(id, true)
        funcion(id)
    }, [])

    if(prod === 'buscando' ) {
        return (
            <div style={{marginTop: "150px", marginBottom: "800px"}}>
                <h1 style={{paddingBottom: "10px"}}>
                    Cargando producto
                </h1>
                <div className="spinner-border text-dark" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div style={{display: "flex", justifyContent: "center", paddingTop: "10px"}}>
                <img src={prod.images} style={{ maxWidth: "440px", height: "400px" }} alt="Producto" />
            </div>
            <div>
                <h5>{prod.name}</h5>
            </div>
        </div>
    )
}
