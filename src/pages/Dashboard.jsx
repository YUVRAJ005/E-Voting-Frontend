import React, {useEffect} from 'react';
import {Link, Navigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import NotAuthorized from '../components/NotAuthorized';
import VoterProfile from '../components/Dashboard/VoterProfile'

function Dashboard() {

    const { isAuthenticated} = useAuth0();

    return (
        <div><h1 class="text-5xl font-bold mx-48 mt-32 font-mono">Dashboard</h1>
            {
                isAuthenticated ? (<VoterProfile />): (<NotAuthorized />)
            }
            
        
        </div>

    );
}

export default Dashboard;