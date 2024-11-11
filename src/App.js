import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Dashboard from './pages/Dashboard_admin.js';
import Dashboard_owner from './pages/Dashboard_owner.js';
import Home from './pages/Home.js';
import Nota from './pages/Nota.js';
import Form from './pages/Form.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import Service from './pages/Service.js';
import Verifikasi from './pages/Verifikasi.js';


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
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
