import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Success from '../assets/Success.png'

function VoteSuccess() {
    const location = useLocation();
    const [receipt, setReceipt] = useState({})
    const [uri, setUri] = useState("")
    const redirect = useNavigate();

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );
    async function makeRequest() {
        await delay(100000);
        redirect("/Dashboard");
    }

    useEffect(() => {
        setReceipt(location.state.receipt);
        setUri("https://sepolia.etherscan.io/tx/" + location.state.receipt.hash);
        makeRequest();

    }, []);

    return (
        <div>
            <div class="text-center mt-32">
                <h3 class="text-3xl font-bold mx-48 mt-36 font-mono">Your Vote Recorded Successfully</h3>
                <h5 class="text-xl  mx-48  font-mono">Transaction Hash : {receipt.hash}</h5>
                <h5 class="text-xl  mx-48  font-mono">
                    <a href={uri} rel="noopener" target="_blank" style={{color:'blue'}}>
                        Get status of your vote transaction
                    </a>
                </h5>
            </div>
            <div class="flex my-16 justify-center items-center">
                <img src={Success} class="w-1/12" alt="Application Submitted" />
            </div>
        </div>

    );
}

export default VoteSuccess;
