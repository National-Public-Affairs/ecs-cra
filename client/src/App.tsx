import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FourZeroFour from './components/404/FourZeroFour';
import Home from './pages/Home/Home';
import Mission from './pages/Mission/Mission';
import Contact from './pages/Contact/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Terms from './pages/Terms/Terms';
// import TakeAction from './pages/TakeAction/TakeAction';

import './App.css';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* <Route path="/take-action" element={<TakeAction />} /> */}
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="*" element={<FourZeroFour />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
