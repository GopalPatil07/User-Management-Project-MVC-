const { render } = require('express/lib/response');
const Product = require('../models/user');

const allUsers = async(req , res)=>{
    await res.render('home');
};
const addProduct = async(req , res)=>{
    await res.render('addProduct');
};
// const saveProduct = async(req , res)=>{
//     const {partNumber , productName, productRate, cgst, sgst} = await req.body;
//     const product = await Product.create({
//         partNumber:partNumber , productName:productName, productRate:productRate, cgst:cgst, sgst:sgst
//     }).catch(error=>console.log(error));
//     console.log(user);
//     await res.render('addItem');
// };

const addDealer = async(req , res)=>{
    await res.render('addDealer');
};
const sellItem = async(req , res)=>{
    await res.render('sellItem');
};

module.exports = {
    allUsers, addProduct, addDealer, sellItem
}