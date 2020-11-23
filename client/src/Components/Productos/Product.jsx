import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from '../../Styles/Product.module.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";
import PieDePagina from '../PieDePagina';


export default function Slideshow({ id }) {
    const [prod, setProd] = useState([]);

    useEffect( async () => {
        const result = await axios.get(`http://localhost:3001/api/product/${id}`);
        setProd(result.data.producto[0]);
    }, [])

    const address = () => {
        if(prod.address) {
            return (
                <h6>
                    {prod.address.city.name}, {prod.address.state.name}, {prod.address.country.name}
                </h6>
            )
        }
    }

    address()

    const images = prod.images && prod.images;

    const condition = () => {
        if(prod.condition === 'new') {
            return (
                <div>
                    Nuevo 
                </div>
            )
        } else if(prod.condition === 'used'){
            return (
            <div>
                Usado 
            </div>
        )}
    }

    if(prod.length === 0 ) {
        return (
            <div style={{marginTop: "150px"}}>
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
            <div className={style.container}>
                <div style={{width: "700px"}}>
                    <Carousel>
                        {
                            images.map(e => {
                                return (
                                    <div>
                                        <img style={{objectFit: "contain"}} src={e} alt="img"/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <div className={style.info}>
                    <div className={style.subInfo}>
                        {condition()} 
                        <div style={{paddingLeft: "4px"}}>
                            | Vendidos {prod.sold}
                        </div>
                    </div>
                    <h1>
                        {prod.name && prod.name}
                    </h1>
                    <hr/>
                    <h2>
                        {prod.currency} $ {prod.price}
                    </h2>
                    <hr/>
                    <div className={style.location}>
                        <div>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-geo-alt-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                        </div>
                        <h4>
                            {address()}
                        </h4>
                    </div>
                </div>
            </div>
            <PieDePagina />
        </div>
    )
}
