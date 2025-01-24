const express = require('express');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes'); 
const reservationRoutes = require('./routes/reservationRoutes'); 

const app = express();

app.use(cors());
app.use(express.json()); 

app.use('/api/users', userRoutes); 
app.use('/api/reservations', reservationRoutes); 

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
