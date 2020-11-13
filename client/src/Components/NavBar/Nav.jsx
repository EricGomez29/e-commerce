import React from 'react';
import SearchBar from './SearchBar';
import logo from '../../img/logo.png'
import { NavLink } from 'react-router-dom';

export default function NavBar({ onSearch }) {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" style={{height: "75px"}}>
            <NavLink exact to='/'>
                <img src={logo} alt="Logo" style={{width:"80px", height: "60px", marginRight: "30px"}}/>
            </NavLink>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/products/categories' > Categorias </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">Sobre mi</NavLink>
                    </li>
                </ul>
                <SearchBar onSearch={onSearch}/>
            </div>
        </nav>
    )
}