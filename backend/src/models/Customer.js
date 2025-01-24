const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming sequelize is configured

class Customer extends Model {}

Customer.init({
    CUST_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    CUST_USER_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    CUST_FULL_NAME: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    CUST_PHONE: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    CUST_ADDRESS: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    CUST_PET_DETAILS: {
        type: DataTypes.TEXT,
    },
    CREATED_DT: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    CREATED_BY: {
        type: DataTypes.STRING(100),
    },
    LAST_UPDATED_DT: {
        type: DataTypes.DATE,
        defaultValue: null,
    },
    LAST_UPDATED_BY: {
        type: DataTypes.STRING(100),
        defaultValue: null,
    },
}, {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers',
    timestamps: false,
});

module.exports = Customer;
