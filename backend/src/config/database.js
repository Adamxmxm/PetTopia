const { Sequelize } = require('sequelize');

// Database connection configuration
const sequelize = new Sequelize('petopia', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', // or 'postgres', 'sqlite', etc.
});

module.exports = sequelize;
