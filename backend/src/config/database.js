const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('petopia', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', 
});

module.exports = sequelize;
