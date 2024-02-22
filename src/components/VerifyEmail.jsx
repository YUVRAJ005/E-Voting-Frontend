import React from 'react';
import EmailVerify from '../assets/EmailVerify.png'

function VerifyEmail() {

    return (
        <div>
            <div class="text-center mt-32">
                <h3 class="text-3xl font-bold mx-48 mt-36 font-mono">Email with which you are signing in not verified.</h3>
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