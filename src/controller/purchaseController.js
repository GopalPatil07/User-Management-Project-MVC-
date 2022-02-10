const { raw } = require('express');
const { render } = require('express/lib/response');
const Product = require('../models/product');
const Stock = require('../models/purchase');


const home = async (req, res) => {
    await res.render('home');
};

/** code to render purchase product page */
const purchaseProduct = async (req, res) => {
    /**quary to get all the part number present in the inventory */
    const partNumber = await Product.findAll({
        attributes:['partNumber'],
        raw: true
    }).catch(error => console.log(error));
    await res.render('purchaseProduct',{partNumber});
};

/** this method update the product quantity in the stock */
const updateStock = async (req, res) => {
    const { partNumber, productName, quantity } = await req.body;
    
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

    await res.render('purchaseProduct', {partNumber})
};


/** this method gives the stock of items present in the inventory */
const showStock=async(req,res)=>{
    const products = await Stock.findAll({
        raw: true
    }).catch(error => console.log(error));

    await res.render('stock')
}

module.exports = {
    home, updateStock,purchaseProduct,showStock
}