const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Order = db.define('orders', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
        allowNull:false
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull:false,
        field:"user_id"
    },

    totalPrice: {
        type: DataTypes.INTEGER,
        allowNull:false,
        field: "total_price"
    },

    status : {
        type: DataTypes.BOOLEAN,
        allowNull:false
    }
});


module.exports = Order;