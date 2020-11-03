const { Router } = require('express');
const productRouter = require('./product');
const apiRouter = require('./api');

var router = Router();

// routes
router.use('/products', productRouter);
router.use('/api', apiRouter);

module.exports = router;