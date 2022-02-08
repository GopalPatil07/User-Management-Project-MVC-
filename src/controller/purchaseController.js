const { raw } = require('express');
const { render } = require('express/lib/response');
const Stock = require('../models/purchase');

const home = async (req, res) => {
    await res.render('home');
};
const addProduct = async (req, res) => {
    await res.render('addProduct');
};
const saveProduct = async (req, res) => {
    const { partNumber, productName, quantity } = await req.body;

    Stock.create({
        partNumber: partNumber, productName: productName, quantity: quantity
    }).catch(error => console.log(error))

    await res.render('addProduct')
};