import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VoterIdApplication from './pages/voterIdApplication';
import HomeSec from './pages/HomeSec';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import NotAuthorized from './pages/NotAuthorized';
import P404 from './pages/P404';

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
          <Route path="/NotAuthorized" element={<NotAuthorized />} />
          <Route path="/*" element={<P404 />} />
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>

  );
}

export default App;
