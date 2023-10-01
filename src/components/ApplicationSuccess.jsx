import React from 'react';
import Success from '../assets/Success.png'

function ApplicationSuccess() {

    return (
        <div>
            <div class="text-center mt-32">
                <h1 class="text-5xl font-bold mx-48 mt-36 font-mono">Application Submitted Successfully</h1>
            </div>
            <div class="flex my-16 justify-center items-center">
                <img src={Success} class="h-60 w-60" alt="Application Submitted" />
            </div>
        </div>
        

    );
}

export default ApplicationSuccess;