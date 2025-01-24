import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!username || !name || !phone || !email || !password) {
      setError('Semua field harus diisi.');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8080/api/users/register', {
        USER_NAME: username,
        USER_EMAIL: email,
        USER_PASSWORD: password,
        CUST_FULL_NAME: name,
        CUST_PHONE: phone
      });

      if (response.status === 201) {
        alert('Registrasi berhasil! Silakan login.');
        window.location.href = '/login';
      } else {
        setError(response.data.message || 'Terjadi kesalahan.');
      }
    } catch (error) {
      console.error(error);
      setError(
        error.response?.data?.message || 'Gagal menghubungi server.'
      );
    }
  };

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      backgroundColor: '#FFD966',
    },
    logoContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF3E3',
    },
    logo: {
      backgroundColor: '#FFF',
      color: '#333',
      fontWeight: 'bold',
      fontSize: '48px',
      borderRadius: '8px',
      width: '120px',
      height: '120px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      width: '350px',
      padding: '40px',
      backgroundColor: '#FFF',
      borderRadius: '15px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    title: {
      fontSize: '24px',
      color: '#e3462c',
      marginBottom: '20px',
    },
    inputGroup: {
      marginBottom: '15px',
      textAlign: 'left',
    },
    label: {
      display: 'block',
      fontSize: '14px',
      marginBottom: '5px',
      color: '#e3462c',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #DDD',
      borderRadius: '5px',
      fontSize: '14px',
      backgroundColor: '#F3F3F3',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#e3462c',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '15px',
    },
    error: {
      color: 'red',
      marginBottom: '15px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <div>
          <img
            src={require('../assets/logo.png')}  
            alt="PetTopia Logo"
            style={{ width: '300px', marginTop:  '20px'}}
          />
        </div>
      </div>
      <div style={styles.formContainer}>
        <div style={styles.box}>
          <h2 style={styles.title}>CREATE ACCOUNT</h2>
          {error && <p style={styles.error}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Nama</label>
              <input
                type="text"
                placeholder="Masukkan nama"
                style={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>No Telepon</label>
              <input
                type="text"
                placeholder="Masukkan no telepon"
                style={styles.input}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                placeholder="Masukkan email"
                style={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Username</label>
              <input
                type="text"
                placeholder="Buat Username Anda"
                style={styles.input}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                placeholder="Buat Password Anda"
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" style={styles.button}>
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
