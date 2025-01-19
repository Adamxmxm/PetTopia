import React from 'react';
import { Link } from 'react-router-dom';

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
        <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>Service</h1>
      </section>

      {/* Services Section */}
      <section style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          <ServiceCard title="Pet Clinic" />
          <ServiceCard title="Pet Daycare" />
          <ServiceCard title="Pet Grooming" />
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ padding: '40px', backgroundColor: '#f4f4f9' }}>
        <h2 style={{ textAlign: 'center', color: '#e3462c' }}>Paket Layanan</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          <PricingCard title="Paket A" price="150.000" />
          <PricingCard title="Paket B" price="200.000" />
          <PricingCard title="Paket C" price="300.000" />
        </div>
      </section>

     {/* Footer */}
      <footer style={{
        backgroundColor: '#242e6e',
        color: 'white',
        padding: '20px 50px',
        display: 'flex',
        justifyContent: 'center', // Center the content
        alignItems: 'center', // Vertically center
        textAlign: 'center', // Center the text
      }}>
        <p>&copy; {new Date().getFullYear()} Petopia. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

function ServiceCard({ title }) {
  let description = '';
  let imageUrl = '';

  if (title === "Pet Clinic") {
    description = "Klinik hewan kami menyediakan perawatan medis lengkap untuk hewan peliharaan Anda, termasuk pemeriksaan, vaksinasi, dan pengobatan.";
    imageUrl = require('../assets/clinic.png'); 
  } else if (title === "Pet Daycare") {
    description = "Daycare hewan kami menawarkan tempat yang aman dan nyaman untuk hewan peliharaan Anda saat Anda sedang sibuk.";
    imageUrl = require('../assets/daycare.png'); 
  } else if (title === "Pet Grooming") {
    description = "Layanan grooming untuk hewan peliharaan Anda, termasuk mandi, potong kuku, dan perawatan bulu untuk menjaga kebersihan dan penampilan.";
    imageUrl = require('../assets/grooming.png'); 
  }

  return (
    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '15px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    }}>
      {/* Gambar */}
      <img 
        src={imageUrl} 
        alt={title} 
        style={{
          width: '300px',
          height: '300px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '15px'
        }} 
      />
      <h3 style={{ color: '#fbc308' }}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}


function PricingCard({ title, price }) {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    }}>
      <h3 style={{ color: '#242e6e' }}>{title}</h3>
      <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#fbc308' }}>Rp {price}</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>5 Dog Walks</li>
        <li>3 Vet Visits</li>
        <li>3 Pet Spa</li>
        <li>Free Supports</li>
      </ul>
      <Link to='/form'>
        <button style={{
            marginTop: '10px',
            padding: '10px 20px',
            backgroundColor: '#e3462c',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        }}>
            Reservasi
        </button>
      </Link>
    </div>
  );
}

export default App;
