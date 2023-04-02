const { DataTypes } = require('sequelize');
const db = require('../utils/database');
const bcrypt = require('bcrypt')

const Users = db.define('users', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },

    username: {
        type: DataTypes.STRING(25),
        allowNull: false,
        unique:true
    },

    email: {
        type: DataTypes.STRING(60),
        allowNull: false,
        unique: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull:false
    },
    avatar: {
        type:DataTypes.STRING,
    }

},
{
    hooks:{
        beforeCreate: async (user) => {
            try {
                const salt = await bcrypt.genSalt(10);
                const passwordHash = await bcrypt.hash(user.password, salt);
                user.password = passwordHash
            } catch (error) {
                throw(error)
            }
        }
    },
    timestamps:false,
});

module.exports = Users;