const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/userRoutes');
const reservationRoutes = require('./src/routes/reservationRoutes');
const sequelize = require('./src/config/database');

const app = express();
const PORT = 5001;

app.use(bodyParser.json());

app.use('/api/auth', userRoutes);
app.use('/api/reservations', reservationRoutes);

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
