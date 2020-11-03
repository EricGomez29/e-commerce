const server = require('express').Router();
const { Product } = require('../db.js');

server.get('/', (req, res) => {
    Product.findAll()
      .then(products => {
        res.json(products);
      })
      .catch(err => {
        res.send('No hay productos :(')
      });
});

module.exports = server;