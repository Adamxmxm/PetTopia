const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('petopia', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', 
});


// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
