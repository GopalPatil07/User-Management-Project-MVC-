const { Sequelize } = require('sequelize');
const db = require('../../db')

module.exports = db.define ('product' , {
  productId :{
    type:Sequelize.INTEGER(11),
    allowNull:false,
    primaryKey:true,
    autoIncrement:true
  },
  partNumber:{
    type:Sequelize.INTEGER(11),
    allowNull:false,
  },
  pName:{
    type:Sequelize.STRING,
    allowNull:false,
  },
  cgst:{
    type:Sequelize.FLOAT(5,2),
    allowNull:false,
  },
  sgst:{
    type:Sequelize.FLOAT(5,2),
    allowNull:false,
  },
  pRate:{
    type:Sequelize.FLOAT(5,2),
    allowNull:false,
  }
})