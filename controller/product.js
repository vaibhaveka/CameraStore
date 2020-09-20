const express = require('express');
const router = express.Router();
const productService =require('../service/product');

router.get('/getAll',productService.getAll);
router.put('/addToCart',productService.addToCart);
router.get('/getCartByUser',productService.getCartByUser);

router.post('/admin/addProduct',productService.addProduct);

module.exports = router;