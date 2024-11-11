import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';


function App() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#f4f4f9' }}>
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
            style={{ width: '170px', marginTop: '20px' }}
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

      {/* Header Section */}
      <section style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px 20px',
        background: 'linear-gradient(135deg, #fbc308, #e3462c)',
        color: 'white',
        textAlign: 'center',
        width: '100%',
      }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>Contact Us</h1>
      </section>

      {/* Main Contact Us Section */}
      <div style={{
        width: '80%',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h2 style={{ color: '#e3462c' }}>Kritik & Saran</h2>
        {/* Section 1 kritik saran*/}
        <section style={{
          display: 'flex',
          width: '100%',
          gap: '20px',
          marginBottom: '20px',
        }}>
          {/* Left Column: Form */}
          <form style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}>
            <label style={{
              textAlign: 'left',  
              fontWeight: 'bold',
              width: '100%',    
              display: 'block',   
              marginBottom: '5px'
            }}>Nama</label>

            <input type="text" id="nama" name="nama" style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }} />

           <label style={{
              textAlign: 'left',  
              fontWeight: 'bold',
              width: '100%',    
              display: 'block',   
              marginBottom: '5px'
            }}>Email</label>

            <input type="email" id="email" name="email" style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }} />

            <label style={{
              textAlign: 'left',  
              fontWeight: 'bold',
              width: '100%',    
              display: 'block',   
              marginBottom: '5px'
            }}>No telepon</label>

            <input type="tel" id="phone" name="phone" style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }} />

            <label style={{
              textAlign: 'left',  
              fontWeight: 'bold',
              width: '100%',    
              display: 'block',   
              marginBottom: '5px'
            }}>Kritik & Saran</label>

            <textarea id="notes" name="notes" rows="4" style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}></textarea>

            <button type="submit" style={{
              padding: '10px 20px',
              backgroundColor: '#242e6e',
              color: 'white',
              border: 'none',
              width: '25%',
              marginTop: '10px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginLeft: 'auto', 
              display: 'block',   
            }} >Submit</button>
          </form>

          {/* Right Column: Image */}
          <div style={{
            flex: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img src={require('../assets/content1.png')} alt="Contact" style={{
              width: '90%',
              borderRadius: '8px',
            }} />
          </div>
        </section>

        <h2 style={{ color: '#e3462c' }}>Medsos</h2>
        {/* Section 2 contact */}
        <section style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          gap: '20px',
          marginBottom: '20px',
        }}>

        {/* Email Card */}
        <div className="card" style={{
          flex: '1',
          backgroundColor: '#ffffff',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center',
          transition: 'background-color 0.3s ease, color 0.3s ease',
          cursor: 'pointer',
        }} 
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#242e6e';
        }} 
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#ffffff';
        }}
        onClick={() => window.location.href = 'mailto:your_email@example.com'} 
        >
          <FaEnvelope size={50} color="#242e6e" />
        </div>

        {/* WhatsApp Card */}
        <div className="card" style={{
          flex: '1',
          backgroundColor: '#ffffff',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center',
          transition: 'background-color 0.3s ease, color 0.3s ease',
          cursor: 'pointer',
        }} 
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#242e6e';
        }} 
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#ffffff';
        }}
        onClick={() => window.location.href = 'https://wa.me/your_whatsapp'} 
        >
          <FaWhatsapp size={50} color="#242e6e" />
        </div>

        {/* Instagram Card */}
        <div className="card" style={{
          flex: '1',
          backgroundColor: '#ffffff',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center',
          transition: 'background-color 0.3s ease, color 0.3s ease',
          cursor: 'pointer',
        }} 
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#242e6e';
          <FaInstagram size={50} color="#242e6e" />
        }} 
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#ffffff';
          <FaInstagram size={50} color="#ffffff" />
        }}
        onClick={() => window.location.href = 'https://www.instagram.com'}  
        >
          <FaInstagram size={50} color="#242e6e" />
        </div>
        </section>

        <h2 style={{ color: '#e3462c' }}>Lokasi Kami</h2>
        {/* Section 3 Google Maps */}
        <section style={{ width: '100%' }}>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.218062396929!2d110.40731841019658!3d-7.851562292137371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57603f0cedb7%3A0xf2797c163038cab0!2sPetopia%20Pet%20Care%20Yogyakarta%2024%20Jam!5e1!3m2!1sid!2sid!4v1731312613725!5m2!1sid!2sid" 
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </section>
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

export default App;
