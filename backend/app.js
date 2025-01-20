const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/userRoutes');
const reservationRoutes = require('./src/routes/reservationRoutes');
const sequelize = require('./src/config/database'); // Assuming sequelize is configured

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', userRoutes);
app.use('/api/reservations', reservationRoutes);

// Sync Database and Start Server
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
