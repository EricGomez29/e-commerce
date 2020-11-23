import React, { useState } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { SearchProductsCategories } from './Components/Productos/CategoryFilter';
import { OrdenarPrecioDes, OrdenarPrecioAsc, OrdenarNuevos, OrdenarUsados } from './Components/NavBar/Filter';
import axios from 'axios';
import Home from './Components/Home';
import NavBar from './Components/NavBar/Nav';
import Cards from './Components/Productos/Cards';
import Filter from './Components/NavBar/FilterComponent';
import Categorias from './Components/Productos/CategoriesComponent';
import './App.css';
import About from './Components/About';
import PieDePagina from './Components/PieDePagina';
import Product from './Components/Productos/Product';
import Carrusel from './Components/Productos/Carrousel';

function App() {
  const [resultados, setResultados] = useState([]);

  async function searchCategory(name) {
    const results = await axios.get(`http://localhost:3001/api/categories/${name}`)
    setResultados(results.data.resultados)
  } 

  function onSearch(products) {
    if(products === true) {
      setResultados('buscando')
    } else {
      axios.get(`http://localhost:3001/api/search?q=${products}`)
        .then(data => {
          var respuestas = data.data.resultados;
          setResultados(respuestas)
          if(respuestas.length === 0) {
            setResultados('nada')
          }
        })
    }
  }

  return (
    <BrowserRouter >
      <Route exact path='/carrusel' render={() => <Carrusel />}/>
      <NavBar onSearch={onSearch}/>
      <div className="App">
        <Route path='/products/search' render = {() => <Filter />}/>
        <Route exact path='/' render = {() => <Home /> }/>
        <Route exact path='/about' render = {() => <About /> }/>
        <Route exact path={`/product/:id`} render = {({match}) => <Product id={match.params.id} />}/>
        <Route exact path='/products/categories' render = {() => <Categorias funcion={searchCategory}/>}/>
        <Route exact path='/products/search' render = {() => <Cards products={resultados}/>}/>
        <Route exact path='/products/search' render = {() => <PieDePagina />}/>
        <Route exact path={`/products/search/category/:name`} render ={({ match }) => <SearchProductsCategories name={match.params.name} funcion={searchCategory} prods={resultados} />}/>
        <Route exact path='/products/search/filter-price-des' render = {() => <OrdenarPrecioDes products={resultados}/> }/>
        <Route exact path='/products/search/filter-price-asc' render = {() => <OrdenarPrecioAsc products={resultados}/> }/>
        <Route exact path='/products/search/filter-condition-new' render = {() => <OrdenarNuevos products={resultados}/> }/>
        <Route exact path='/products/search/filter-condition-used' render = {() => <OrdenarUsados products={resultados}/> }/>
      </div>
    </BrowserRouter>
  );
}

export default App;
