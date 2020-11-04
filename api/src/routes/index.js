const { Router } = require('express');
const apiRouter = require('./api');

var router = Router();

// routes
router.use('/api', apiRouter);

module.exports = router;