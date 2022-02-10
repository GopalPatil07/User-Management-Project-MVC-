const { raw } = require('express');
const { render } = require('express/lib/response');
const Product = require('../models/product');
const Stock = require('../models/purchase');

const home = async(req , res)=>{
    await res.render('home');
};
const addProduct = async(req , res)=>{
    await res.render('addProduct');
};
const saveProduct = async(req , res)=>{
 const {partNumber, productName, cgst, sgst, productPrice} = await req.body;
Product.create({
    partNumber:partNumber, productName:productName, cgst:cgst, sgst:sgst, productPrice:productPrice
}).catch(error=>console.log(error))
await Stock.create({
    partNumber: partNumber, productName: productName, quantity: 0
}).catch(error => console.log(error))
await res.render ('addProduct')
};

const addDealer = async(req , res)=>{
    await res.render('addDealer');
};
const sellItem = async(req , res)=>{
    await res.render('sellItem');
};

const products = async(req, res)=>{
    const products = await Product.findAll({
        raw:true
    }).catch(error=>console.log(error))
    await res.render('products' , {products})

}
const editProduct = async(req , res)=>{
    const {productId} = await req.params;
    const product = await Product.findOne({
        where:{
            productId:productId
        },
        raw:true
    }).catch(error=>console.log(error))
    await res.render('editProduct' , {product});
}

const updateProduct = async(req, res)=>{
    const {productId} = req.params;
    const data = req.body;
    const selector = {where :{productId :productId}}
    await Product.update(data , selector).catch(error=>console.log(error))
}
module.exports = {
    home, addProduct, addDealer, sellItem, saveProduct, products , editProduct , updateProduct
}