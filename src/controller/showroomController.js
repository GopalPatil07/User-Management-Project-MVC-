const { raw } = require('express');
const { render } = require('express/lib/response');
const Product = require('../models/product');
const Stock = require('../models/purchase');

/**method to render the home page */
const home = async(req , res)=>{
    await res.render('home');
};

/**method to render the product page */
const addProduct = async(req , res)=>{
    await res.render('addProduct');
};

/**method to add the products into product and stock table */
const saveProduct = async(req , res)=>{
 const {partNumber, productName, cgst, sgst, productPrice} = await req.body;

 /**quary for to add Products into the db */
     Product.create({
            partNumber:partNumber, productName:productName, cgst:cgst, sgst:sgst, productPrice:productPrice
                    }).catch(error=>console.log(error))
/**quary to add products into stocks with default quantity 0 */
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

/**method to view all products present in the database */
const products = async(req, res)=>{
    const products = await Product.findAll({
        raw:true
    }).catch(error=>console.log(error))
    await res.render('products' , {products})
}

/**method to find product details which need to be edited */
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

/**method to edit the product details */

const updateProduct = async(req, res)=>{
    const {productId} = req.params;
    const data = req.body;
    const selector = {where :{productId :productId}}
/**quary to update the prodct details */
    await Product.update(data , selector).catch(error=>console.log(error))
}

module.exports = {
    home, addProduct, addDealer, sellItem, saveProduct, products , editProduct , updateProduct
}