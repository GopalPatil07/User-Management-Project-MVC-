const { raw } = require('express');
const { render } = require('express/lib/response');
const Stock = require('../models/purchase');

const home = async (req, res) => {
    await res.render('home');
};
const purchaseProduct = async (req, res) => {
    await res.render('purchaseProduct');
};
const addProduct = async (req, res) => {
    const { partNumber, productName, quantity } = await req.body;

    Stock.update({
        quantity: quantity
    }, {
        where: {
            partNumber:partNumber
        }
    }).catch(error => console.log(error))

    await res.render('purchaseProduct')
};

module.exports = {
    home, addProduct,purchaseProduct
}