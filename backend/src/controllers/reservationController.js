const Reservation = require('../models/Reservation'); // Assuming Reservation model is defined

// Create Reservation
const createReservation = async (req, res) => {
    const { userId, petId, serviceId, date, time, notes } = req.body;
    
    try {
        const newReservation = await Reservation.create({
            USER_ID: userId,
            RES_PET_ID: petId,
            RES_SERVICE_ID: serviceId,
            RES_DATE: date,
            RES_TIME: time,
            RES_NOTES: notes,
        });
        res.status(201).json({ message: 'Reservation created successfully', reservation: newReservation });
    } catch (error) {
        res.status(500).json({ message: 'Error creating reservation', error });
    }
};

// Get Reservations
const getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.findAll();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reservations', error });
    }
};

module.exports = { createReservation, getReservations };
