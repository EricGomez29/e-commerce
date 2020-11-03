const server = require('express').Router();
const axios = require('axios');

server.get('/search', (req, res) => {
    const query = req.query.q;
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
        .then(data => {
            var results = data.data.results;
            return results
        }).then(results => {
            var arr = [];
            for (let i = 0; i < results.length; i++) {
                arr.push({
                    id: results[i].id,
                    image: results[i].thumbnail,
                    name: results[i].title,
                    price: results[i].price,
                    stock: results[i].available_quantity,
                    sold: results[i].sold_quantity,
                    condition: results[i].condition
                })
            };
            var total = arr.length;
            res.json({
                total,
                resultados: arr
            })
        }).catch(err => {
            console.log(err);
            res.status(404).send('Internal Error')
        })
})

module.exports = server;