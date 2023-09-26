import React from 'react';
import LoginButton from '../components/LoginButton';

function NotAuthorized() {
    return (
    <div>
        <h1 class="text-5xl text-red-500 font-bold mx-48 mt-36 font-mono">Warning !</h1>
            <div class="mx-48 my-10 rounded overflow-hidden shadow-lg" >
                <div class="mx-10 my-10">
                <p class="text-xl">You are not authorized to access this page. Please login.</p>
                </div>
            </div>
        
    </div>

)};

export default NotAuthorized;