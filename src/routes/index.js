const express = require('express');
<<<<<<< HEAD
const {addProduct, addDealer, sellItem, saveProduct, home, products, editProduct, updateProduct} = require('../controller/showroomController');
=======
const {addProduct, addDealer, sellItem, saveProduct, home, products} = require('../controller/showroomController');
const { purchaseProduct} = require('../controller/purchaseController');
>>>>>>> 059fc8eb4739dca60f4cfb4bbfba8d62cf356180
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
>>>>>>> 059fc8eb4739dca60f4cfb4bbfba8d62cf356180
module.exports = router;