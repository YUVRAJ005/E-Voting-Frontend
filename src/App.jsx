import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VoterIdApplication from './pages/voterIdApplication';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import NotAuthorized from './components/NotAuthorized';
import P404 from './pages/P404';
import Vote from './pages/Vote';
import VoteConfirm from './pages/VoteConfirm';
import VoteSuccess from './pages/VoteSuccess';
import VoteFail from './pages/VoteFail';
import Results from './pages/Results';
import Elections from './pages/Elections';

function App() {
  return (
    <div>

      <BrowserRouter >
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/voterIdApplication" element={<VoterIdApplication />} />
          <Route path="/About" element={<About />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/NotAuthorized" element={<NotAuthorized />} />
          <Route path="/Vote" element={<Vote />} />
          <Route path="/VoteConfirm" element={<VoteConfirm />} />
          <Route path="/VoteSuccess" element={<VoteSuccess />} />
          <Route path="/VoteFail" element={<VoteFail />} />
          <Route path="/Elections" element={<Elections />} />
          <Route path="/Results" element={<Results />} />
          <Route path="/*" element={<P404 />} />
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>

  );
}

export default App;
