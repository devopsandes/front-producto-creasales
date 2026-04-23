import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ContactPage from './ContactPage';
import WhyUsPage from './WhyUsPage';

import Navbar from './Navbar';
import Footer from './Footer';
import ChatWidget from './ChatWidget';

import { LanguageProvider } from './LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/por-que-nosotros" element={<WhyUsPage />} />
          </Routes>
          <Footer />
          <ChatWidget />
        </div>
      </Router>
    </LanguageProvider>
  );
}
