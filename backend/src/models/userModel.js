const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming the database configuration is in this file

const Customer = sequelize.define('Customer', {
  ID_CUSTOMER: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  NAMA_CUSTOMER: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  NO_TELFON: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  ALAMAT: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
}, {
  tableName: 'CUSTOMER',
  timestamps: false, // Assuming no timestamps are needed
});

module.exports = Customer;
