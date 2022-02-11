const { Sequelize } = require('sequelize');
const db = require('../../db');

module.exports = db.define ('products' , {
    dealerId:{
      type:Sequelize.INTEGER(11),
      allowNull:false,
      primaryKey:true,
      autoIncrement:true,
     },
    name:{
      type:Sequelize.INTEGER(11),
      allowNull:false,
    },
    gstNumber:{
      type:Sequelize.STRING,
      allowNull:false,
    },
    phoneNumber:{
      type:Sequelize.INTEGER(10),
      allowNull:false,
    },
    email:{
      type:Sequelize.STRING,
      allowNull:false,
    },
    address:{
      type:Sequelize.STRING,
      allowNull:false,
    }
  })