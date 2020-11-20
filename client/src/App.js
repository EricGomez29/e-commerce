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

function App() {
  const [resultados, setResultados] = useState([]);
  const [data, setData] = useState([]);

  async function searchCategory(name) {
    if(name === "palabraClave") {
      setData([])
    }
    const results = await axios.get(`http://localhost:3001/api/categories/${name}`)
    setData(results.data.resultados)
    setResultados([])
  } 

  function onSearch(products) {
    if(products === "palabraClave") {
      setResultados('buscando')
    } else {
      axios.get(`http://localhost:3001/api/search?q=${products}`)
        .then(data => {
          var respuestas = data.data.resultados
          setResultados(respuestas)
          return respuestas
        }).then(respuestas => {
          console.log(respuestas.length)
          if(respuestas.length === 0) {
            setResultados('nada')
          }
        })
      setData([])
    }
  }

  return (
    <BrowserRouter >
      <NavBar onSearch={onSearch}/>
      <div className="App">
        <Route exact path='/' render = {() => <Home /> }/>
        <Route exact path='/about' render = {() => <About /> }/>
        <Route exact path='/products/categories' render = {() => <Categorias funcion={searchCategory}/>}/>
        <Route path='/products/search' render = {() => <Filter />}/>
        <Route exact path='/products/search' render = {() => <Cards products={resultados}/>}/>
        <Route exact path='/products/search' render = {() => <PieDePagina />}/>
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
