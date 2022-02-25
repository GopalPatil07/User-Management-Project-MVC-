const { Sequelize } = require('sequelize');
const db = require('../../db');
const customer = require('./customer')
module.exports = db.define('orders', {
    orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,  
    },
    orderNo: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
    },
    customerID: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references : 
        {
            model : customer,
            key: customer.customerID
        }
    },
    partNumber: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
    },
    productName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    quantity: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
    },
    cgst:{
        type:Sequelize.FLOAT(5,2),
        allowNull:false,
      },
      sgst:{
        type:Sequelize.FLOAT(5,2),
        allowNull:false,
      },
      amount:{
        type:Sequelize.DOUBLE(7,2),
        allowNull:false,
      },
      total:{
        type:Sequelize.FLOAT(7,2),
        allowNull:false,
      },
})