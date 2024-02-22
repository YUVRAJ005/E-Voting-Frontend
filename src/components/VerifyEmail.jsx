import React from 'react';
import { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import EmailVerify from '../assets/EmailVerify.png'

function VerifyEmail() {
    const { logout } = useAuth0();

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    async function makeRequest() {
        await delay(7000);
        logout({ logoutParams: { returnTo: window.location.origin } });
    }

    useEffect(() => {
        makeRequest();
    }, []);

    return (
        <div>
            <div class="text-center mt-32">
                <h3 class="text-3xl font-bold mx-48 mt-36 font-mono">Email with which you are signing in, is not verified.</h3>
                <h5 class="text-xl  mx-48  font-mono">Registered email would have received verification email.</h5>
                <h5 class="text-xl  mx-48  font-mono">Please verify your email and try again.</h5>
            </div>
            <div class="flex my-16 justify-center items-center">
                <img src={EmailVerify} class="w-1/12" alt="Application Submitted" />
            </div>
        </div>
        

    );
}

export default VerifyEmail;