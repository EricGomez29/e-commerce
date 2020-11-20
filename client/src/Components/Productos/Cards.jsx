import React, { useState } from 'react';
import ProductCard from './ProductCard.jsx';
import style from '../../Styles/ProductCard.module.css';
import Pagination from './Pagination';

export default function Catalogo({ products, empty }) {

    const [pagina, setPagina] = useState(1)  //el numero de las paginas, empieza en 1
    const productos = 20;                      // productos q van a ver por pagina (hay q cambiarlo)
    
    if(products === 'nada') {
        console.log('entro a -nada-')
        return (
            <div style={{marginTop: "150px", marginBottom: "800px"}}>
                <h1 style={{paddingBottom: "10px"}}>
                    No hay productos disponibles
                </h1>
            </div>
        )
    }
    if(empty === "vacio") {
        return (
            <div style={{marginTop: "150px", marginBottom: "800px"}}>
                <h1>No hay productos</h1>
            </div>
        )
    }
    if(products === 'buscando') {
        return (
            <div style={{marginTop: "150px", marginBottom: "800px"}}>
                <h1 style={{paddingBottom: "10px"}}>
                    Buscando
                </h1>
                <div className="spinner-border text-dark" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    const final = pagina * productos;
    const principio = final - productos;
    const arrayProductos = products.slice(principio, final);

    function proximaPagina (number){ 
        setPagina(number)
    }

    return (
        <div>
            <div className={style.display}>
                {
                    arrayProductos.map(p => {
                        return <ProductCard 
                            id = {p.id}
                            image = {p.image}
                            name = {p.name}
                            price = {p.price}
                            stock = {p.stock}
                            sold = {p.sold}
                            condition = {p.condition}
                        />
                    })
                }
            </div>
            <div style={{ margin: "30px", display: "flex",justifyContent: "center"}}>
                <Pagination totalProductos={products} paginas={proximaPagina} productPorPagina={productos}/>
            </div>
        </div>
    )
}