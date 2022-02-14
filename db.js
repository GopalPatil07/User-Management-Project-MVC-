const Sequelize = require('sequelize');

const db = new Sequelize('yamaha' , 'root' , 'Gopal#123',{
    host : 'localhost',
    password: "Gopal#123",
    dialect : 'mysql'
})

module.exports= db;