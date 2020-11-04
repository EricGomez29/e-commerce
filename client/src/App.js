import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Catalogo from './Components/Productos/Catalogo';
import NavBar from './Components/Nav';

function App() {
  const [resultados, setResultados] = useState([]);

  async function onSearch(products) {
    const result = await axios.get(`http://localhost:3001/api/search?q=${products}`)
    setResultados(result.data.resultados)
  }

  return (
    <BrowserRouter >
      <NavBar onSearch={onSearch}/>
      <Route exact path='/products/search' render = {() => <Catalogo products={resultados}/>}/>
    </BrowserRouter>
  );
}

export default App;
