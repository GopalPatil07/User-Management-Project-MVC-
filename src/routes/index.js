const express = require('express');
const {addProduct, sellItem, saveProduct, home, products, editProduct, updateProduct, addDealer} = require('../controller/showroomController');
const { updateStock, purchaseProduct, showStock}=require('../controller/purchaseController')
const {saveDealer} = require('../controller/dealerController')
const router = express.Router();

router.get('/' , home);
router.get('/addProduct' , addProduct);
router.post('/addProduct', saveProduct);
router.get('/products', products);
router.get('/editProduct/:productId', editProduct);
router.get('/editProduct/updateProduct/:productId', updateProduct);

// router.get('/addDealer' , addDealer);
router.post('/addDealer' , saveDealer);

router.get('/sellItem' , sellItem);
router.post('/addProduct' , saveProduct);
router.get('/products' , products);
router.get('/editProduct/:productId' , editProduct);
router.get('/editProduct/updateProduct/:productId' , updateProduct);

router.get('/purchaseProduct', purchaseProduct);
router.post('/purchaseProduct', updateStock);
router.get('/showStock',showStock);

module.exports = router;