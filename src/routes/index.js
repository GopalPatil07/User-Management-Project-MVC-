const express = require('express');
const {addProduct, addDealer, sellItem, saveProduct, home, products} = require('../controller/showroomController');
const router = express.Router();

router.get('/' , home);
router.get('/addProduct' , addProduct);
router.get('/addDealer' , addDealer);
router.get('/sellItem' , sellItem);
router.post('/addProduct' , saveProduct);
router.get('/products' , products);
module.exports = router;