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
import Counter from './pages/Counter.jsx';


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
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
