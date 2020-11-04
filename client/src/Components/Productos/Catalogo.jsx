import React from 'react';
import ProductCard from './ProductCard.jsx';
import style from '../../Styles/ProductCard.module.css';

export default function Catalogo({ products }) {

    return (
        <div>
            <div className={style.display}>
                {
                    products.map(p => {
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
        </div>
    )
}