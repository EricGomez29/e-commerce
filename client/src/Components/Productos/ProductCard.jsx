import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../../Styles/ProductCard.module.css';
 
export default function ProductCard({ key, id, image, name, price, condition, stock }) {

    if(condition === 'new') {
        return (
            <div key={key} className={style.productCard}>
                <div className="card" style={{ width: "250px", height: "400px", alignItems: "center" }} >
                    <NavLink to={`/product/${id}`} style={{ textDecoration: 'none' }}>
                        <div style={{display: "flex", justifyContent: "center", paddingTop: "10px"}}>
                            <img src={image} style={{ maxWidth: "240px", height: "200px", objectFit: "cover" }} alt="Producto" />
                        </div>
                        <hr/>
                        <div className="card-body" style={{maxHeight: "120px", paddingTop: "0px"}}>
                            <div style={{display: "flex"}}>
        <h5 className="card-title" style={{ color: "black", fontSize: "20px" }}>AR${price}</h5>
                                <p className="bg-success" style={{height: "15px", width: "60px", fontSize: "10px", display: "flex", justifyContent: "center", borderRadius: "4px"}} >NUEVO</p>
                            </div>
                            <p className="card-text" style={{maxHeight:"63px", height:"63px"}} >{name}</p>
                            <p>{stock} disponible/s</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        )
    } else {
        return (
            <div className={style.productCard}>
                <div className="card" style={{ width: "250px", height: "400px", alignItems: "center" }} >
                    <NavLink to={`/product/${id}`} style={{ textDecoration: 'none' }}>
                        <div style={{display: "flex", justifyContent: "center", paddingTop: "10px"}}>
                            <img src={image} style={{ maxWidth: "240px", height: "200px", objectFit: "contain" }} alt="Producto" />
                        </div>
                        <hr/>
                        <div className="card-body" style={{maxHeight: "120px", paddingTop: "0px"}}>
                            <div style={{display: "flex"}}>
                                <h5 className="card-title" style={{ color: "black", fontSize: "20px" }}>AR${price}</h5>
                                <p className="bg-warning" style={{height: "15px", width: "60px", fontSize: "10px", display: "flex", justifyContent: "center", borderRadius: "4px"}} >USADO</p>
                            </div>
                            <p className="card-text" style={{maxHeight:"63px", height:"63px"}} >{name}</p>
                            <p>{stock} disponible/s</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        )
    }
};