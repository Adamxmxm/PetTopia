import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard_admin.jsx';
import Dashboard_owner from './pages/Dashboard_owner.jsx';
import Home from './pages/Home.jsx';
import Nota from './pages/Nota.jsx';
import Form from './pages/Form.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Service from './pages/Service.jsx';
import Verifikasi from './pages/Verifikasi.jsx';
import Report_day from './pages/Report_day.jsx';
import Report_month from './pages/Report_month.jsx';
import Report_day_admin from './pages/Report_day_admin.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/admin" element={<Dashboard />} />
        <Route path="/dashboard/owner" element={<Dashboard_owner />} />
        <Route path="/nota" element={<Nota />} />
        <Route path="/form" element={<Form />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/dashboard/admin/verifikasi" element={<Verifikasi />} />
        <Route path="/dashboard/Report_day" element={<Report_day />} />
        <Route path="/dashboard/Report_day_admin" element={<Report_day_admin />} />
        <Route path="/dashboard/Report_month" element={<Report_month />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
