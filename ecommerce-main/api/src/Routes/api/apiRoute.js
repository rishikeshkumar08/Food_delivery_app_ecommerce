const express = require('express');
const categoryRoute = require('./categoryRouter');
const productsRoute = require('./productsRouter');

const router = express.Router();

router.use('/category', categoryRoute);
router.use('/products', productsRoute);

module.exports = router;