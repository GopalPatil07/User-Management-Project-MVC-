const express = require('express');
const {addProduct, sellItem, saveProduct, home, products, editProduct, updateProduct, deleteProduct} = require('../controller/productController');
const { updateStock, purchaseProduct, showStock}=require('../controller/purchaseController')
const {saveDealer, addDealer, allDealers} = require('../controller/dealerController')
const router = express.Router();

router.get('/' , home);
router.get('/addProduct' , addProduct);
router.post('/addProduct', saveProduct);
router.get('/products', products);
router.get('/editProduct/:productId', editProduct);
router.post('/editProduct/:productId', updateProduct);

router.get('/deleteProduct/:productId', deleteProduct);

router.get('/addDealer' , addDealer);
router.post('/addDealer' , saveDealer);
router.get('/allDealers' , allDealers);

router.get('/sellItem' , sellItem);
router.post('/addProduct' , saveProduct);
router.get('/products' , products);

router.get('/purchaseProduct', purchaseProduct);
router.post('/purchaseProduct', updateStock);
router.get('/showStock',showStock);

router.get('/sellItem',showStock);

module.exports = router;