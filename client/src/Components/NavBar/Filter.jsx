import React from 'react';
import PieDePagina from '../PieDePagina';
import Cards from '../Productos/Cards';

export function OrdenarPrecioDes({ products, categ }) {
    // if(categ.length !== 0) {
    //     console.log(categ.length)
    //     console.log('entro')
    //     var arr1 = categ.sort((a, b) => {
    //         const precioA = a.price;
    //         const precioB = b.price;
    //         if(precioA < precioB) {
    //             return -1;
    //         }
    //         if(precioA > precioB) {
    //             return 1;
    //         }
    //         return 0;
    //     })
    //     return (
    //         <div>
    //             <Cards products={arr1} />
    //             <PieDePagina />
    //         </div>
    //     )
    // }
    var arr = products.sort((a, b) => {
        const precioA = a.price;
        const precioB = b.price;
        if(precioA < precioB) {
            return -1;
        }
        if(precioA > precioB) {
            return 1;
        }
        return 0;
    })
    return (
        <div>
            <Cards products={arr} />
            <PieDePagina />
        </div>
    )
}

export function OrdenarPrecioAsc({ products, categ }) {
    // if(categ.length !== 0) {
    //     console.log(categ.length)
    //     console.log('entro')
    //     var arr1 = categ.sort((a, b) => {
    //         const precioA = a.price;
    //         const precioB = b.price;
    //         if(precioA > precioB) {
    //             return -1;
    //         }
    //         if(precioA < precioB) {
    //             return 1;
    //         }
    //         return 0;
    //     })
    //     return (
    //         <div>
    //             <Cards products={arr1} />
    //             <PieDePagina />
    //         </div>
    //     )
    // }
    var arr = products.sort((a, b) => {
        const precioA = a.price;
        const precioB = b.price;
        if(precioA > precioB) {
            return -1;
        }
        if(precioA < precioB) {
            return 1;
        }
        return 0;
    })
    return (
        <div>
            <Cards products={arr} />
            <PieDePagina />
        </div>
    )
}

export function OrdenarNuevos({ products, categ }) {
    // var arr1 = categ.filter( p => {
    //     return (p.condition === "new")
    // })
    // if(arr1.length !== 0) {
    //     return (
    //         <div>
    //             <Cards products={arr1} />
    //             <PieDePagina />
    //         </div>
    //     )
    // }

    var arr = products.filter( p => {
        return (p.condition === "new")
    })

    if(arr.length === 0) {
        var empty = "vacio";
        return (
            <div>
                <Cards products={arr} empty={empty} />
                <PieDePagina />
            </div>
        )
    }

    return (
        <div>
            <Cards products={arr} />
            <PieDePagina />
        </div>
    )
}

export function OrdenarUsados({ products, categ }) {
    // var arr1 = categ.filter( p => {
    //     return (p.condition === "used")
    // })

    // if(arr1.length !== 0) {
    //     return (
    //         <div>
    //             <Cards products={arr1} />
    //             <PieDePagina />
    //         </div>
    //     )
    // }

    var arr = products.filter( p => {
        return (p.condition === "used")
    })

    if(arr.length === 0) {
        var empty = "vacio"
        return (
            <div>
                <Cards products={arr} empty={empty} />
                <PieDePagina />
            </div>
        )
    }

    return (
        <div>
            <Cards products={arr} />
            <PieDePagina />
        </div>
    )
}