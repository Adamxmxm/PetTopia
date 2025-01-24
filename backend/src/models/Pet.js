const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming sequelize is configured

class Pet extends Model {}

Pet.init({
    PET_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    PET_CUST_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    PET_NAME: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    PET_JENIS: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    PET_BREED: {
        type: DataTypes.STRING(50),
    },
    PET_UMUR: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    PET_NOTES: {
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
    modelName: 'Pet',
    tableName: 'pets',
    timestamps: false,
});

module.exports = Pet;
