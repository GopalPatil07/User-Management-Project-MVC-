const { Sequelize } = require('sequelize');
const db = require('../../db');

module.exports = db.define('customers', {
    customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    customerName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    customerVehicleNumber: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
    },
    phoneNumber: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})