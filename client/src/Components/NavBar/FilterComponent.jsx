import React from 'react';
import { Link } from 'react-router-dom';

export default function Filter() {

    return(
        <div style={{backgroundColor: "grey", marginTop: "75px", marginBottom: "-100px"}}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info" style={{height: "30px"}}>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item" style={{color: "white", paddingTop: "15px", marginRight: "4px"}}>Filtrar por precio:</li>
                    <Link to='/products/search/filter-price-des' >
                        <button className="btn bg-info" style={{color: "white", fontSize: "20px"}}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-sort-down-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 3a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0v-10A.5.5 0 0 1 3 3z"/>
                                <path fillRule="evenodd" d="M5.354 11.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L3 12.793l1.646-1.647a.5.5 0 0 1 .708 0zM7 6.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5zm0 3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5zm0 3a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5zm0-9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5z"/>
                            </svg>
                        </button>
                    </Link>
                    <Link to='/products/search/filter-price-asc' >
                        <button className="btn bg-info" style={{color: "white", fontSize: "20px"}}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-sort-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 2a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0v-10A.5.5 0 0 1 3 2z"/>
                                <path fillRule="evenodd" d="M5.354 10.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L3 11.793l1.646-1.647a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 9a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </button>
                    </Link>
                    <li className="nav-item" style={{color: "white", paddingTop: "15px", marginRight: "20px"}}> -- </li>
                    <li className="nav-item" style={{color: "white", paddingTop: "15px", marginRight: "4px"}}>Filtrar por estado:</li>
                    <Link to='/products/search/filter-condition-new' >
                        <button className="btn bg-info" style={{color: "white"}}>
                            Nuevo
                        </button>
                    </Link>
                    <Link to='/products/search/filter-condition-used' >
                        <button className="btn bg-info" style={{color: "white"}}>
                            Usado
                        </button>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}