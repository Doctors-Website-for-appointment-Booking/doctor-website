import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import Faqs from './pages/Faqs';
import Header from './pages/Header';
import Footer from './pages/Footer';

import BookAppointment from './pages/BookAppointment';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/About" element={<About />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="BookAppointment" element={<BookAppointment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;