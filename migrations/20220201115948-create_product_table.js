'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     */
     await queryInterface.createTable('products', 
     { 
       productId:{
        type:Sequelize.INTEGER(11),
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
       },
     
    partNumber:{
      type:Sequelize.INTEGER(11),
      allowNull:false,
    },
    productName:{
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
    productPrice:{
      type:Sequelize.FLOAT(5,2),
      allowNull:false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
   });
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
