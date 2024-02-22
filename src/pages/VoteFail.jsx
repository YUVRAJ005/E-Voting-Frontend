import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Fail from '../assets/Fail.png'

function VoteFail() {
    const location = useLocation();
    const [terror, setTerror] = useState("")
    const redirect = useNavigate();

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );
    async function makeRequest() {
        await delay(7000);
        redirect("/Dashboard");
    }

    useEffect(() => {
        setTerror(location.state.errr.message);
        makeRequest();
        
    }, []);
    console.log(location.state.errr);
    console.log(location.state.errr.message.Error);
    return (
        <div>
            <div class="text-center mt-32">
                <h1 class="text-lg break-all font-bold mx-48 mt-36 font-mono">{terror}</h1>
            </div>
            <div class="flex my-16 justify-center items-center">
                <img src={Fail} class="h-32 w-32" alt="Vote Fail" />
            </div>
        </div>
    );
}

export default VoteFail;