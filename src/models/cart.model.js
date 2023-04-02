const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const cart = db.define('cart', {
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
    }
});

module.exports = cart;
