const express = require('express');
const {addProduct, addDealer, sellItem, saveProduct, home, products, editProduct, updateProduct} = require('../controller/showroomController');
const router = express.Router();

router.get('/' , home);
router.get('/addProduct' , addProduct);
router.post('/addProduct', saveProduct);
router.get('/products', products);
router.get('/editProduct/:productId', editProduct);
router.get('/editProduct/updateProduct/:productId', updateProduct);

router.get('/addDealer' , addDealer);

router.get('/sellItem' , sellItem);
router.post('/addProduct' , saveProduct);
router.get('/products' , products);
router.get('/editProduct/:productId' , editProduct);
router.get('/editProduct/updateProduct/:productId' , updateProduct);
module.exports = router;