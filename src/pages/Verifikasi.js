import React from 'react';
import { Link } from 'react-router-dom';

function Verifikasi() {
  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Poppins, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{
        width: '250px',
        backgroundColor: '#242e6e',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        height: '100vh',
        overflowY: 'auto', 
      }}>
        <div>
          <img
            src={require('../assets/logowhite.png')}  
            alt="PetTopia Logo"
            style={{ width: '170px', marginTop:  '20px'}}
          />
        </div>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            marginTop: '40px',
            textAlign: 'left' 
            }}>
              <Link to='/dashboard/admin/'>
              <li style={{ marginBottom: '15px' }}>
                <span style={{ color: 'white', textDecoration: 'none' }}>Dashboard</span>
              </li>
            </Link>
              <li style={{ marginBottom: '15px' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Manage Reservasi</a>
              </li>
              <li style={{ marginBottom: '15px' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Laporan Reservasi</a>
              </li>
              <li style={{ marginBottom: '15px' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Verifikasi Nota</a>
              </li>
            </ul>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, backgroundColor: '#f4f4f9', padding: '20px' }}>
        
      {/* Top Bar */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 0',
      }}>
        <h2 style={{ marginTop: '20px', color: '#242e6e' , textAlign: 'left' }}>Verifikasi Nota</h2>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
          <img
            src={require('../assets/admin.png')}  
            alt="Profile"
            style={{ 
              width: '35px', 
              height: '35px', 
              borderRadius: '50%', 
              marginRight: '10px'
            }}
          />
          <span style={{ fontWeight: 'bold', marginRight: '20px' }}>Admin</span>

          <Link to="/login">
          <button style={{
            width:'100px',
            padding: '10px 10px',
            backgroundColor: '#e3462c',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontSize: '14px',
            fontFamily: 'Poppins',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}>
            Logout
          </button>
        </Link>

        </div>
      </header>
    
        {/* Table */}
        <section style={{
        backgroundColor: 'white',
        marginTop: '30px',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}>
        <h3 style={{ color: '#242e6e', marginBottom: '20px' }}>Table</h3>
        <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            color: '#242e6e',
        }}>
            <thead>
            <tr>
                <th style={tableHeaderStyle}>ID</th>
                <th style={tableHeaderStyle}>Name</th>
                <th style={tableHeaderStyle}>Status</th>
                <th style={tableHeaderStyle}>Date</th>
                <th style={tableHeaderStyle}>Action</th>
            </tr>
            </thead>
            <tbody>
            {[
                { id: '#1001', name: 'Pet Grooming', status: 'NEW', date: '18 Apr 2024' },
                { id: '#1002', name: 'Pet Walking', status: 'NEW', date: '26 Apr 2024' },
                { id: '#1003', name: 'Pet Clinic', status: 'NEW', date: '20 May 2024' },
                { id: '#1004', name: 'Pet Grooming', status: 'NEW', date: '25 May 2024' },
            ].map((item, index) => (
                <tr key={index} style={{ textAlign: 'center' }}>
                <td style={tableCellStyle}>{item.id}</td>
                <td style={tableCellStyle}>{item.name}</td>
                <td style={tableCellStyle}>{item.status}</td>
                <td style={tableCellStyle}>{item.date}</td>
                <td style={tableCellStyle}>
                    <button
                    style={{
                        padding: '8px 16px',
                        backgroundColor: 'green',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                    }}
                    onClick={() => alert(`Approved: ${item.name}`)} 
                    >
                    Approve
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </section>
      </div>
    </div>
  );
}

const tableHeaderStyle = {
  padding: '10px',
  backgroundColor: '#f4f4f9',
  color: '#242e6e',
  fontWeight: 'bold',
};

const tableCellStyle = {
  padding: '10px',
  borderBottom: '1px solid #e0e0e0',
};

function Card({ title, value, color }) {
  return (
    <div style={{
      flex: '1',
      minWidth: '200px',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    }}>
      <h3 style={{ color }}>{title}</h3>
      <p style={{ fontSize: '24px', fontWeight: 'bold', color }}>{value}</p>
    </div>
  );
}

export default Verifikasi;
