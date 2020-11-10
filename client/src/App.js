import React, { useState, useEffect } from 'react';
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

function App() {
  const [resultados, setResultados] = useState([]);
  const [data, setData] = useState([]);

  async function searchCategory(name) {
    const results = await axios.get(`http://localhost:3001/api/categories/${name}`)
    setData(results.data.resultados)
    setResultados([])
  } 


  async function onSearch(products) {
    const result = await axios.get(`http://localhost:3001/api/search?q=${products}`)
    setResultados(result.data.resultados)
    setData([])
  }

  return (
    <BrowserRouter >
      <NavBar onSearch={onSearch}/>
      <div className="App">
        <Route exact path='/' render = {() => <Home /> }/>
        <Route exact path='/products/categories' render = {() => <Categorias /> }/>
        <Route path='/products/search' render = {() => <Filter />}/>
        <Route exact path='/products/search' render = {() => <Cards products={resultados}/>}/>
        <Route exact path={`/products/search/category/:name`} render ={({ match }) => <SearchProductsCategories name={match.params.name} funcion={searchCategory} prods={data} />}/>
        <Route exact path='/products/search/filter-price-des' render = {() => <OrdenarPrecioDes products={resultados} categ={data}/> }/>
        <Route exact path='/products/search/filter-price-asc' render = {() => <OrdenarPrecioAsc products={resultados} categ={data}/> }/>
        <Route exact path='/products/search/filter-condition-new' render = {() => <OrdenarNuevos products={resultados} categ={data}/> }/>
        <Route exact path='/products/search/filter-condition-used' render = {() => <OrdenarUsados products={resultados} categ={data}/> }/>
      </div>
    </BrowserRouter>
  );
}

export default App;
