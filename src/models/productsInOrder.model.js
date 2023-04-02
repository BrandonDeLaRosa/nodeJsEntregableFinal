const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const productInOrder = db.define('productsInOrder', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
        allowNull:false
    },

    orderId: {
        type: DataTypes.INTEGER,
        allowNull:false,
        field:"order_id"
    },

    productId: {
        type: DataTypes.INTEGER,
        allowNull:false,
        field: "product_id"
    },

    quantity:{
        type: DataTypes.INTEGER,
        allowNull:false
    },

    price:{
        type: DataTypes.INTEGER,
        allowNull:false
    },


    status : {
        type: DataTypes.BOOLEAN,
        allowNull:false
    }
});

module.exports= productInOrder;