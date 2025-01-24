const Reservation = require('../models/Reservation');
const Customer = require('../models/Customer');
const Pet = require('../models/Pet');
const { validationResult } = require('express-validator');
const User = require('../models/User');
const sequelize = require('../config/database');


const createReservation = async (req, res) => {
    const { fullName, phone, address, petName, petJenis, petUmur, petNotes, serviceId, date, time, notes } = req.body;
  
    try {
      console.log('Received reservation data:', req.body);
  

      const [user] = await sequelize.query(
        'SELECT USER_ID FROM users WHERE USER_NAME = ?',
        {
          replacements: [fullName],
          type: sequelize.QueryTypes.SELECT
        }
      );
  
      if (!user) {
        console.error('User not found');
        return res.status(404).json({ message: 'User not found' });
      }
  
      console.log('User found, USER_ID:', user.USER_ID);

      const [customer] = await sequelize.query(
        'INSERT INTO customers (CUST_USER_ID, CUST_FULL_NAME, CUST_PHONE, CUST_ADDRESS, CREATED_DT, CREATED_BY) VALUES (?, ?, ?, ?, ?, ?)',
        {
          replacements: [user.USER_ID, fullName, phone, address, new Date(), 'SYSTEM'],
          type: sequelize.QueryTypes.INSERT
        }
      );
  
      console.log('Customer created:', customer);
  

      const [pet] = await sequelize.query(
        'INSERT INTO pets (PET_CUST_ID, PET_NAME, PET_JENIS, PET_UMUR, PET_NOTES, CREATED_DT, CREATED_BY) VALUES (?, ?, ?, ?, ?, ?, ?)',
        {
          replacements: [user.USER_ID, petName, petJenis, petUmur, petNotes, new Date(), 'SYSTEM'],
          type: sequelize.QueryTypes.INSERT
        }
      );
  
      console.log('Pet created:', pet);

      const [fetchedPet] = await sequelize.query(
        'SELECT PET_ID FROM pets WHERE PET_CUST_ID = ? AND PET_NAME = ? ORDER BY CREATED_DT DESC LIMIT 1',
        {
          replacements: [user.USER_ID, petName],
          type: sequelize.QueryTypes.SELECT
        }
      );
  
      if (!fetchedPet) {
        console.error('Pet not found');
        return res.status(404).json({ message: 'Pet not found' });
      }
  
      console.log('Fetched PET_ID:', fetchedPet.PET_ID);
  

      const [reservation] = await sequelize.query(
        'INSERT INTO reservations (RES_CUST_ID, RES_PET_ID, RES_SERVICE, RES_DATE, RES_TIME, RES_NOTES, CREATED_DT, CREATED_BY) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        {
          replacements: [user.USER_ID, fetchedPet.PET_ID, serviceId, date, time, notes, new Date(), 'SYSTEM'],
          type: sequelize.QueryTypes.INSERT
        }
      );
  
      console.log('Reservation created:', reservation);
  
      res.status(201).json({
        message: 'Reservation created successfully',
        reservation: reservation,
        customer: customer,
        pet: pet,
      });
    } catch (error) {
      console.error('Error creating reservation:', error);
      res.status(500).json({ message: 'Error creating reservation', error: error.message });
    }
  };
  

const getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.findAll();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reservations', error });
    }
};

module.exports = { createReservation, getReservations };
