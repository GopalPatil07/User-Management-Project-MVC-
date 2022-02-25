const { raw } = require('express');
const { render } = require('express/lib/response');
const Product = require('../models/product');
const Stock = require('../models/stock');


const home = async (req, res) => {
    await res.render('home');
};

/** this method update the product quantity in the stock */
const updateStock = async (req, res) => {
    const { partNumber, quantity } = await req.body;
    
    /**quary to get previous quantity */
    const qua=await Stock.findOne({
        attributes :['quantity'],
        where: {
            partNumber:partNumber
        },
        raw: true
    }).catch(error=> console.log(error))
    const quan = parseInt(Object.values(qua))+parseInt(quantity)
    /**quary to update the previous stock in the inventory */
    await Stock.update({
        quantity: quan
    }, {
        where: {
            partNumber:partNumber
        }
    }).catch(error => console.log(error))

    await res.send(partNumber)
};


/** this method gives the stock of items present in the inventory */
const showStock=async(req,res)=>{
    const products = await Stock.findAll({
        raw: true
    }).catch(error => console.log(error));

    await res.send(products)
}

module.exports = {
    home, updateStock,showStock
}