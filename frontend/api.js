import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/', 
});

// Function to create a reservation
export const createReservation = async (data) => {
  try {
    const response = await api.post('reservations', data);
    return response.data;
  } catch (error) {
    throw new Error('Error creating reservation: ' + error.message);
  }
};
const login = async (data) => {
  try {
    const response = await api.post('/login', data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const reservasi = async (data) => {
  try {
    const response = await api.post('/reservasi', data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { register, login, reservasi };


javascript

import React, { useState } from 'react';
import { register, login, reservasi } from './api';

const App = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [jam, setJam] = useState('');

  const handleRegister = async () => {
    const data = { nama, email, password };
    const response = await register(data);
    console.log(response);
  };

  const handleLogin = async () => {
    const data = { email, password };
    const response = await login(data);
    console.log(response);
  };

  const handleReservasi = async () => {
    const data = { tanggal, jam };
    const response = await reservasi(data);
    console.log(response);
  };

  return (
    <div>
      <h1>Register</h1>
      <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleRegister}>Register</button>

      <h1>Login</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>

      <h1>Reservasi</h1>
      <input type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} placeholder="Tanggal" />
      <input type="time" value={jam} onChange={(e) => setJam(e.target.value)} placeholder="Jam" />
      <button onClick={handleReservasi}>Reservasi</button>
    </div>
  );
};
export default App;