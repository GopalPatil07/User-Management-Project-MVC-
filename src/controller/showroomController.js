const { render } = require('express/lib/response');
const Product = require('../models/product');

const home = async(req , res)=>{
    await res.render('home');
};
const addProduct = async(req , res)=>{
    await res.render('addProduct');
};
const saveProduct = async(req , res)=>{
//   let partNumber = req.body.partNumber;
//   let pName = req.body.pName;
//   let cgst = req.body.cgst;
//   let sgst = req.body.sgst;
//   let pRate = req.body.pRate;
//   console.log(partNumber);
//   console.log(pName);
//   console.log(cgst);
//   console.log(sgst);
//   console.log(pRate);
 const {partNumber, productName, cgst, sgst, productPrice} = await req.body;
Product.create({
    partNumber:partNumber, productName:productName, cgst:cgst, sgst:sgst, productPrice:productPrice
}).catch(error=>console.log(error))
await res.render ('/home')
};

const addDealer = async(req , res)=>{
    await res.render('addDealer');
};
const sellItem = async(req , res)=>{
    await res.render('sellItem');
};

module.exports = {
    home, addProduct, addDealer, sellItem, saveProduct
}