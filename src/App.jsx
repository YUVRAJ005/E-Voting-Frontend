import React from 'react';
import WebHome from './pages/WebHome';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import VoterIdApplication from './components/voterIdApplication';
import HomeSec from './components/HomeSec';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>

      <BrowserRouter >
        <Navbar />
        <Routes >
          <Route path="/" element={<HomeSec />} />
          <Route path="/voterIdApplication" element={<VoterIdApplication />} />
          <Route path="/About" element={<About />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>

  );
}

export default App;
