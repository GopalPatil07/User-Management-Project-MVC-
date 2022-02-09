const express = require('express');
<<<<<<< HEAD
const {addProduct, addDealer, sellItem, saveProduct, home, products, editProduct, updateProduct} = require('../controller/showroomController');
=======
const {addProduct, addDealer, sellItem, saveProduct, home, products} = require('../controller/showroomController');
<<<<<<< HEAD
const { purchaseProduct, addProduct1} = require('../controller/purchaseController');
=======
const { purchaseProduct} = require('../controller/purchaseController');
>>>>>>> 059fc8eb4739dca60f4cfb4bbfba8d62cf356180
>>>>>>> 09fb85489499f1d0506327d1f7dc068cd7a2d50c
const router = express.Router();

router.get('/' , home);
router.get('/addProduct' , addProduct);
router.get('/addDealer' , addDealer);
router.get('/sellItem' , sellItem);
router.post('/addProduct' , saveProduct);
router.get('/products' , products);
<<<<<<< HEAD
router.get('/editProduct/:productId' , editProduct);
router.get('/editProduct/updateProduct/:productId' , updateProduct);
=======
router.get('/purchaseProduct', purchaseProduct);
<<<<<<< HEAD
router.post('/purchaseProduct', addProduct1);
=======
>>>>>>> 059fc8eb4739dca60f4cfb4bbfba8d62cf356180
>>>>>>> 09fb85489499f1d0506327d1f7dc068cd7a2d50c
module.exports = router;