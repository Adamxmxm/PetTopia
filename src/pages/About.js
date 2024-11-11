import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegSmile, FaAmbulance, FaHeadset, FaStethoscope } from 'react-icons/fa';

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
        padding: '60px 20px',
        background: 'linear-gradient(135deg, #fbc308, #e3462c)',
        color: 'white',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>About US</h1>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: '40px', textAlign: 'center' }}>
        <h2 style={{ color: '#242e6e' }}>Why Choose Us?</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          maxWidth: '100%',
          margin: '0 auto',
        }}>
          <FeatureCard title="Care Advice" />
          <FeatureCard title="Emergency Services" />
          <FeatureCard title="Customer Support" />
          <FeatureCard title="Veterinary Help" />
        </div>
      </section>

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


function FeatureCard({ title }) {
  let description = '';
  let Icon = null;

  // Tentukan deskripsi dan ikon berdasarkan judul
  if (title === "Care Advice") {
    description = "Dapatkan saran ahli mengenai perawatan hewan peliharaan, termasuk nutrisi, perawatan, dan langkah pencegahan kesehatan.";
    Icon = FaRegSmile; // Ikon untuk Care Advice
  } else if (title === "Emergency Services") {
    description = "Layanan darurat 24/7 untuk memastikan hewan peliharaan Anda mendapatkan perawatan segera dalam situasi kritis.";
    Icon = FaAmbulance; // Ikon untuk Emergency Services
  } else if (title === "Customer Support") {
    description = "Tim dukungan pelanggan kami siap membantu dengan pertanyaan atau masalah yang Anda hadapi.";
    Icon = FaHeadset; // Ikon untuk Customer Support
  } else if (title === "Veterinary Help") {
    description = "Akses perawatan dan konsultasi kesehatan hewan profesional untuk kesejahteraan hewan peliharaan Anda.";
    Icon = FaStethoscope; // Ikon untuk Veterinary Help
  }

  return (
    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      flex: '1',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: '40px', color: '#e3462c' }}>
        <Icon />
      </div>
      <h3 style={{ color: '#e3462c' }}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}


export default App;
