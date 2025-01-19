const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming the database configuration is in this file

const Booking = sequelize.define('Booking', {
  ID_BOOKING: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ID_CUSTOMER: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ID_PRODUK: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  JUMLAH_BARANG: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  TANGGAL_BOOKING: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  WAKTU_BOOKING: {
    type: DataTypes.TIME,
    allowNull: false,
  },
}, {
  tableName: 'BOOKING',
  timestamps: false, // Assuming no timestamps are needed
});

module.exports = Booking;
