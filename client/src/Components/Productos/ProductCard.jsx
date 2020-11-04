import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../../Styles/ProductCard.module.css';
 
export default function ProductCard({ id, image, name, price, condition }) {

    return (
        <div className={style.productCard}>
            <div className="card" style={{ width: "250px", height: "400px", alignItems: "center" }} >
                <NavLink to={`/producto/${id}`} style={{ textDecoration: 'none' }}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <img src={image} style={{ maxWidth: "240px", height: "200px" }} alt="Producto" />
                    </div>
                    <hr/>
                    <div className="card-body" style={{maxHeight: "120px"}}>
                        <h5 className="card-title" style={{ color: "black", fontSize: "20px" }}>${price}</h5>
                        <p className="card-text" >{name}</p>
                    </div>
                    <div className="card-body">
                        <p className="card-text" style={{color: "grey"}}>condicion: {condition}</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
};