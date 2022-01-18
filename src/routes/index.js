const express = require('express');
const {allUsers, addProduct, addDealer, sellItem} = require('../controller/usercontrolers');
const router = express.Router();

router.get('/' , allUsers);
router.get('/addProduct' , addProduct);
router.get('/addDealer' , addDealer);
router.get('/sellItem' , sellItem);
// router.post('/addItem' , saveProduct);

module.exports = router;