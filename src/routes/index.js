const express = require('express');
const {allUsers, addProduct} = require('../controller/usercontrolers');
const router = express.Router();

router.get('/' , allUsers);
router.get('/addProduct' , addProduct);
// router.post('/addItem' , saveProduct);

module.exports = router;