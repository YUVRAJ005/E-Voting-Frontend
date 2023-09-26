import React from 'react';
import {Link, Navigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

function Dashboard() {
    const { isAuthenticated} = useAuth0();
    return (
        <div>
            { !isAuthenticated && <Navigate to="/NotAuthorized" replace={true}/>}
        
        
        
        </div>

    );
}

export default Dashboard;