const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming sequelize is configured

class Reservation extends Model {}

Reservation.init({
    RES_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    RES_CUST_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    RES_PET_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    RES_SERVICE_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    RES_DATE: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    RES_TIME: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    RES_NOTES: {
        type: DataTypes.TEXT,
    },
    CREATED_DT: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    modelName: 'Reservation',
    tableName: 'reservations',
    timestamps: false,
});

module.exports = Reservation;
