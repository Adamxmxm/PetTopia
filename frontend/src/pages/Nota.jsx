import React, { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom'; // untuk mengambil RES_ID dari URL
import axios from 'axios';

function Nota() {
  const { resId } = useParams(); // Mengambil RES_ID dari URL
  const [reservationData, setReservationData] = useState(null);

  // Mengambil data reservasi berdasarkan RES_ID
  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/reservations/${resId}`);
        setReservationData(response.data); // Menyimpan data reservasi ke state
      } catch (error) {
        console.error('Error fetching reservation data:', error);
      }
    };

    fetchReservation();
  }, [resId]);

  // Jika data reservasi belum ada, tampilkan loading atau pesan error
  if (!reservationData) {
    return <div>Loading...</div>;
  }

  const { customer, pet, reservation } = reservationData; // Mengambil data customer, pet, dan reservation

  return (
    <div style={{
      fontFamily: 'Poppins, sans-serif',
      background: 'linear-gradient(135deg, #fbc308, #e3462c)',
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
            #{reservation.RES_ID}
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
          <p style={{ color: '#000', fontSize: '20px' }}>Hi, <span style={{ fontWeight: 'bold', color: '#242e6e', fontSize: '20px' }}>{customer.CUST_FULL_NAME}</span></p>
          <p style={{ color: '#000', fontSize: '12px', textAlign: 'justify' }}>Terimakasih telah memesan layanan kami, Berikut detail harga layanan yang anda pesan.</p>
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
            <span>{pet.PET_NAME}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span style={{ fontWeight: 'bold' }}>Jenis</span>
            <span>{pet.PET_JENIS}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span style={{ fontWeight: 'bold' }}>Tanggal</span>
            <span>{reservation.RES_DATE}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span style={{ fontWeight: 'bold' }}>Waktu</span>
            <span>{reservation.RES_TIME}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span style={{ fontWeight: 'bold' }}>Service</span>
            <span>{reservation.RES_SERVICE_ID}</span>
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
