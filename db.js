const Sequelize = require('sequelize');

const db = new Sequelize('ums' , 'host' , '',{
    host : 'localhost',
    dialect : 'mysql'
})

module.exports= db;