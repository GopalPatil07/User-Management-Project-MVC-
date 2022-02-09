const { raw } = require('express');
const { render } = require('express/lib/response');
const Stock = require('../models/purchase');

const home = async (req, res) => {
    await res.render('home');
};
const purchaseProduct = async (req, res) => {
    await res.render('purchaseProduct');
};
const addProduct1 = async (req, res) => {
    const { partNumber, productName, quantity } = await req.body;
    const qua=await Stock.findOne({
        attributes :['quantity'],
        where: {
            partNumber:partNumber
        },
        raw: true
    }).catch(error=> console.log(error))
    const quan = parseInt(Object.values(qua))+parseInt(quantity)
    await Stock.update({
        quantity: quan
    }, {
        where: {
            partNumber:partNumber
        }
    }).catch(error => console.log(error))

    await res.render('purchaseProduct')
};

module.exports = {
    home, addProduct1,purchaseProduct
}