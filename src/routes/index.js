const express = require('express');
const { sellItem, saveProduct, products, editProduct, updateProduct, deleteProduct} = require('../controller/productController');
const { updateStock, showStock, addToStock}=require('../controller/stockController')
const {saveDealer, allDealers} = require('../controller/dealerController')
const router = express.Router();

router.post('/addProduct/post', saveProduct);
router.get('/products', products);
router.get('/editProduct/:productId', editProduct);
router.post('/editProduct/:productId', updateProduct);

router.get('/deleteProduct/:productId', deleteProduct);

router.post('/addDealer/post' , saveDealer);
router.get('/allDealers' , allDealers);

router.get('/sellItem' , sellItem);

router.post('/addToStock/post', updateStock);
router.get('/showStock',showStock);

router.get('/sellItem');

module.exports = router;