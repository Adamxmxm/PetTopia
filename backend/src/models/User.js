const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming sequelize is configured

class User extends Model {}

User.init({
    USER_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    USER_NAME: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    USER_EMAIL: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    USER_PASSWORD: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CREATED_DT: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    LAST_UPDATED_DT: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
});

module.exports = User;
