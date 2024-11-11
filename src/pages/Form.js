import React from 'react';
import { Link } from 'react-router-dom';

function ReservationForm() {
  const inputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    marginTop: '5px',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#f4f4f9', minHeight: '100vh' }}>
      {/* Navbar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
        backgroundColor: '#242e6e',
        color: 'white',
      }}>
        <div>
          <img
            src={require('../assets/logowhite.png')}  
            alt="PetTopia Logo"
            style={{ width: '170px', marginTop:  '20px'}}
          />
        </div>
        <ul style={{
          display: 'flex',
          alignItems: 'center',
          listStyle: 'none',
          gap: '20px',
          margin: 0,
          padding: 0,
        }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li> 
          <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li> 
          <li><Link to="/service" style={{ color: 'white', textDecoration: 'none' }}>Service</Link></li> 
          <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
          <li>
            <Link to="/login">
              <button style={{
                padding: '10px 20px',
                backgroundColor: '#e3462c',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginLeft: '20px',
              }}>
                Login
              </button>
            </Link>
          </li>
        </ul>
      </nav>

      <section style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '70px 20px',
        background: 'linear-gradient(135deg, #fbc308, #e3462c)',
        color: 'white',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>Form Reservasi</h1>
      </section>

      {/* Form Reservasi */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '30px 0'
      }}>
        <form style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '20px',
          width: '60%',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '50px',
            marginTop: '20px'
          }}>
            {/* Kolom kiri */}
            <div style={{ width: '48%' }}>
              <h3 style={{ fontSize: '18px', color: '#333' }}>Identitas Pemilik</h3>
              <div style={{ marginBottom: '15px', textAlign: 'left'  }}>
                <input type="text" placeholder="Nama pemilik" style={inputStyle} />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <input type="text" placeholder="Alamat" style={inputStyle} />
              </div>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                <div style={{ flex: 1 }}>
                  <input type="email" placeholder="Email" style={inputStyle} />
                </div>
                <div style={{ flex: 1 }}>
                  <input type="tel" placeholder="No Telepon" style={inputStyle} />
                </div>
              </div>

              <h3 style={{ fontSize: '18px', color: '#333', marginTop: '100px' }}>Identitas Hewan Peliharaan</h3>
              <div style={{ marginBottom: '15px' }}>                
                <input type="text" placeholder="Nama peliharaan" style={inputStyle} />
              </div>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                <div style={{ flex: 1 }}>                
                  <input type="text" placeholder="Jenis hewan" style={inputStyle} />
                </div>
                <div style={{ flex: 1 }}>                
                  <input type="number" placeholder="Usia" style={inputStyle} />
                </div>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <textarea placeholder="Catatan lain" style={inputStyle}></textarea>
              </div>
            </div>

            {/* Kolom kanan */}
            <div style={{ width: '48%' }}>
              <h3 style={{ fontSize: '18px', color: '#333' }}>Informasi Reservasi</h3>
              <div style={{ marginBottom: '15px' }}>
                <input type="date" style={inputStyle} />
              </div>
              <div style={{ marginBottom: '15px' }}>
               
                <input type="time" style={inputStyle} />
              </div>
              <div style={{ marginBottom: '15px' }}>
               
                <textarea placeholder="Notes" style={inputStyle}></textarea>
              </div>

              <h3 style={{ fontSize: '18px', color: '#333', marginTop: '70px' }}>Pilih Paket Grooming</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <input type="checkbox" />
                  Paket A - Rp 150.000
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <input type="checkbox" />
                  Paket B - Rp 200.000
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <input type="checkbox" />
                  Paket C - Rp 300.000
                </label>
              </div>

              <Link to="/nota">
              <button type="submit" style={{
                marginTop: '30px',
                width: '100%',
                padding: '12px 0',
                backgroundColor: '#e3462c',
                color: 'white',
                fontSize: '18px',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }} onMouseEnter={(e) => e.target.style.backgroundColor = '#d2371e'}
                 onMouseLeave={(e) => e.target.style.backgroundColor = '#e3462c'}>
                Submit
              </button>
              </Link>
            </div>
          </div>
        </form>
      </div>

     {/* Footer */}
     <footer style={{
        backgroundColor: '#242e6e',
        color: 'white',
        padding: '20px 50px',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
      }}>
        <p>&copy; {new Date().getFullYear()} Petopia. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default ReservationForm;
