import React from 'react';
import VoterIdApplication from '../components/voterIdApplication'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import VoteIN_Logo from '../assets/VoteIN_Logo.png';
import server from '../config'
import HomeSec from '../components/HomeSec';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function WebHome() {
    return (
        <div>

            <BrowserRouter >
                <Navbar />
                <Routes >
                    <Route path="/" element={<HomeSec />} />
                </Routes>
                <Footer />
            </BrowserRouter>

        </div>
    );
}
export default WebHome;
