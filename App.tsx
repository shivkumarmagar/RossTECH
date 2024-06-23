// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import KeyFeatures from './components/KeyFeatures';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import LoginPopup from './components/LoginPopup';
import About from './components/About';
import ContactUs from './components/ContactUs';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <KeyFeatures />
              <HowItWorks />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
