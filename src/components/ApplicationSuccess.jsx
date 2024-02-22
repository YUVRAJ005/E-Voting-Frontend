import React from 'react';
import Success from '../assets/Success.png'

function ApplicationSuccess() {

    return (
        <div>
            <div class="text-center mt-32">
                <h3 class="text-3xl font-bold mx-48 mt-36 font-mono">Application Submitted Successfully</h3>
                <h5 class="text-xl  mx-48  font-mono">If your applicaiton is accepted, registered email will receive verification email.</h5>
            </div>
            <div class="flex my-16 justify-center items-center">
                <img src={Success} class="w-1/12" alt="Application Submitted" />
            </div>
        </div>
        

    );
}

export default ApplicationSuccess;