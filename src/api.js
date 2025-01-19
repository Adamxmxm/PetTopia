import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/register'; // Adjust the URL as needed

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// New function to insert booking
export const insertBooking = async (bookingData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/bookings', bookingData); // Adjust the URL as needed
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
