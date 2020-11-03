const { Router } = require('express');
const productRouter = require('./product');

var router = Router();

// routes
router.use('/products', productRouter);

module.exports = router;