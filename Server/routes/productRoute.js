const express = require('express');
const router = express.Router();

const productC = require('../controllers/productController');

router
    .get('/show-product', productC.showProduct)
    .get('/get-product-category/:id', productC.selectProductById)

    .post('/add-product', productC.insertProduct)
    .put('/update-product/:productid', productC.updateProduct)
    .delete('/del-pdt/:id', productC.deleteProduct);

module.exports = router;