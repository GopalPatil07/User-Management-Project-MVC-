const { Sequelize } = require('sequelize');
const db = require('../../db');
const product = require('./product');

module.exports = db.define('stocks', {
    stockId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    partNumber: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references : 
        {
            model : product,
            key: product.partNumber
        }
    },
    productName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    quantity: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
    }
})