import React from 'react';
import { Link } from 'react-router-dom';

function ReportMonth() {
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
              <Link to='/dashboard/owner/'>
                <li style={{ marginBottom: '15px' }}>
                  <span style={{ color: 'white', textDecoration: 'none' }}>Dashboard</span>
                </li>
              </Link>
              <li style={{ marginBottom: '15px' }}>
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Laporan Harian</a>
              </li>
              <Link to='/dashboard/Report_month'>
                <li style={{ marginBottom: '15px' }}>
                  <span style={{ color: 'white', textDecoration: 'none' }}>Laporan Bulanan</span>
                </li>
              </Link>
            </ul>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, backgroundColor: '#f4f4f9', padding: '20px' }}>
        <h2 style={{ marginTop: '20px', color: '#242e6e' }}>Laporan Harian</h2>
        
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
                  <th style={tableHeaderStyle}>Month</th>
              </tr>
              </thead>
              <tbody>
              {[
                  { id: '#1001', name: 'Pet Grooming', status: 'NEW', month: 'April 2024' },
                  { id: '#1002', name: 'Pet Walking', status: 'NEW', month: 'April 2024' },
                  { id: '#1003', name: 'Pet Clinic', status: 'NEW', month: 'April 2024' },
                  { id: '#1004', name: 'Pet Grooming', status: 'NEW', month: 'April 2024' },
              ].map((item, index) => (
                  <tr key={index} style={{ textAlign: 'center' }}>
                  <td style={tableCellStyle}>{item.id}</td>
                  <td style={tableCellStyle}>{item.name}</td>
                  <td style={tableCellStyle}>{item.status}</td>
                  <td style={tableCellStyle}>{item.month}</td>
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

export default ReportMonth;
