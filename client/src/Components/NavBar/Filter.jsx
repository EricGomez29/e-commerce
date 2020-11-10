import React from 'react';
import Cards from '../Productos/Cards';

export function OrdenarPrecioDes({ products, categ }) {
    if(categ.length !== 0) {
        console.log(categ.length)
        console.log('entro')
        var arr1 = categ.sort((a, b) => {
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
                <Cards products={arr1} />
            </div>
        )
    }
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
        </div>
    )
}

export function OrdenarPrecioAsc({ products, categ }) {
    if(categ.length !== 0) {
        console.log(categ.length)
        console.log('entro')
        var arr1 = categ.sort((a, b) => {
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
                <Cards products={arr1} />
            </div>
        )
    }
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
        </div>
    )
}

export function OrdenarNuevos({ products, categ }) {
    if(categ.length !== 0) {
        var arr1 = categ.filter( p => {
            return (p.condition === "new")
        })
    
        return (
            <div>
                <Cards products={arr1} />
            </div>
        )
    }

    var arr = products.filter( p => {
        return (p.condition === "new")
    })

    return (
        <div>
            <Cards products={arr} />
        </div>
    )
}

export function OrdenarUsados({ products, categ }) {
    if(categ.length !== 0) {
        var arr1 = categ.filter( p => {
            return (p.condition === "used")
        })
        
        return (
            <div>
                <Cards products={arr1} />
            </div>
        )
    }
    var arr = products.filter( p => {
        return (p.condition === "used")
    })
    
    return (
        <div>
            <Cards products={arr} />
        </div>
    )
}