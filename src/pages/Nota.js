import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Nota() {
  return (
    <div style={{
      fontFamily: 'Poppins, sans-serif',
      backgroundColor: '#fbc308',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        width: '350px',
        padding: '30px',
        borderRadius: '20px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        color: '#333',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
            <img src={require('../assets/logo.png')} alt="PetTopia Logo" style={{ width: '120px', marginRight: '10px' }} />
            <div style={{ marginLeft: 'auto', color: '#999', fontSize: '12px' }}>
            #INV12345
          </div>
        </div>
        <div style={{
          color: '#e3462c',
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}>
          Thank you for your reservation.
        </div>

        {/* Customer Details */}
        <div style={{ fontSize: '14px', marginBottom: '15px' }}>
          <p style={{ color: '#000', fontSize:'20px' }}>Hi, <span style={{ fontWeight: 'bold', color: '#242e6e', fontSize:'20px' }}>Budi</span></p>
          <p style={{ color: '#000', fontSize:'12px', textAlign:'justify' }}>Terimakasih telah memesan layanan kami, Berikut detail harga layanan yang anda pesan.</p>
          <p>===================================</p>
        </div>

        {/* Detail Reservasi */}
        <div style={{
          fontSize: '14px',
          lineHeight: '1.6',
          marginBottom: '15px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span style={{ fontWeight: 'bold' }}>Nama Pet</span>
            <span>Milo</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span style={{ fontWeight: 'bold' }}>Jenis</span>
            <span>Cat</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span style={{ fontWeight: 'bold' }}>Tanggal</span>
            <span>11 November 2024</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span style={{ fontWeight: 'bold' }}>Waktu</span>
            <span>09.00 WIB</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span style={{ fontWeight: 'bold' }}>Umur</span>
            <span>2 Tahun</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span style={{ fontWeight: 'bold' }}>Service</span>
            <span>Pet Grooming</span>
          </div>
        </div>

        {/* Total Harga */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontWeight: 'bold',
          marginTop: '15px',
          marginBottom: '10px'
        }}>
          <div className="label" style={{ color: '#e3462c', fontSize: '20px' }}>TOTAL</div>
          <div className="total-amount" style={{ color: '#e3462c', fontSize: '20px' }}>Rp 150,000</div>
        </div>


        <div style={{
        display: 'flex',
        marginTop: '20px',
        alignItems: 'center'
        }}>
        {/* Button Download */}
        <button style={{
            width: '10%',
            padding: '10px',
            backgroundColor: '#242e6e',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            marginRight: '10px'
        }}>
            <FaDownload size={16} /> 
        </button>
        
        
            {/* Button Selesai */}
            <div style={{ display: 'flex', width: '100%' }}>
            <Link to="/home" style={{ width: '100%' }}>
                <button style={{
                width: '100%',
                padding: '10px 20px',
                backgroundColor: '#242e6e',
                color: 'white',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '100px',
                cursor: 'pointer'
                }}>
                Selesai
                </button>
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Nota;
