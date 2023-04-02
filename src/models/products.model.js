const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const products = db.define( 'products', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },

    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true 
    },

    description: {
        type: DataTypes.TEXT,
        allowNull:false
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull:false
    },

    availableQty: {
        type: DataTypes.INTEGER,
        allowNull:false,
        field:"available_qty"
    },

    status: {
        type: DataTypes.BOOLEAN,
        allowNull:false
    },
    img: {
        type:DataTypes.STRING
    },
    
    userId: {
        type: DataTypes.INTEGER,
        allowNull:false,
        field: "user_id"
    }

});

module.exports = products;