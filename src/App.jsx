import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Login from './components/Login.jsx';
import Navbar from './components/Navbar.jsx';
import Pricing from './components/Pricing.jsx';
import VoiceCallSystem from './components/VoiceCallSystem.jsx';
import ManagerDashboard from './components/ManagerDashboard.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Footer />} />
      <Route path="/voicecall" element={<VoiceCallSystem />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/managerdashboard" element={<ManagerDashboard />} />
    </Routes>
  
  </Router>
  );
}

export default App;
