import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FourZeroFour from './components/404/FourZeroFour';
import Home from './pages/Home/Home';
import Mission from './pages/Mission/Mission';
import Advisors from './pages/Advisors/Advisors';
import Endorsements from './pages/Endorsements/Endorsements';
import Contact from './pages/Contact/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Terms from './pages/Terms/Terms';
import './App.css';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advisors" element={<Advisors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/endorsements" element={<Endorsements />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="*" element={<FourZeroFour />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
