const express = require('express');
const { getAllProducts, addProducts, addProductsAll, getProduct, addBestSeller, getBestSeller } = require('../../Controllers/api/productController');

const router = express.Router();

router.get('/', getAllProducts);

router.post('/bestseller', addBestSeller);
router.get('/bestseller', getBestSeller)

//fetched using id
router.get('/:id', getProduct);

router.post('/', addProducts)
router.post('/all', addProductsAll)



module.exports = router;