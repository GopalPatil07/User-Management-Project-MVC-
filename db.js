const Sequelize = require('sequelize');

const db = new Sequelize('showroom' , 'root' , 'tiger',{
    host : 'localhost',
    password: "tiger",
    dialect : 'mysql'
})

module.exports= db;