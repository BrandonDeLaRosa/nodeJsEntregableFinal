const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Order = db.define('orders', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
        field: "total_price",
        defaultValue: 0.0
    },

    status : {
        type: DataTypes.BOOLEAN,
        allowNull:false
    }
});


module.exports = Order;