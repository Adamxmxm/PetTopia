import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }
  
    setError('');
  
    try {
      const response = await fetch('http://localhost:3000/backend/controllers/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include', 
      });
  
      const data = await response.json();
  
      if (response.ok) {
        if (data.role === 'ADMIN') {
          navigate('/dashboard/admin');
        } else if (data.role === 'OWNER') {
          navigate('/dashboard/owner');
        } else {
          setError('Unknown role.');
        }
      } else {
        setError(data.msg || 'Invalid username or password.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
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
      color: '#333',
      fontWeight: 'bold',
      fontSize: '48px', 
      borderRadius: '50%',
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
      backgroundColor: '#FFFFFF',
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
    buttonHover: {
      backgroundColor: '#FF9B33',
    },
    registerLink: {
      marginTop: '15px',
      fontSize: '12px',
      color: '#000',
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
          <h2 style={styles.title}>LOGIN</h2>
          {error && <p style={styles.error}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                style={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              style={styles.button}
              onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
            >
              Login
            </button>
          </form>
         
          <Link to="/register"> <p style={styles.registerLink}>Belum memiliki akun? klik untuk membuat akun</p></Link>
        </div>
      </div>
    </div>
  );
  
}

export default Login;
