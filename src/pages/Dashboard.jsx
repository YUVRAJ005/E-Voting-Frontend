import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import VoterProfile from '../components/Dashboard/VoterProfile';
import Loading from '../components/Loading';
import abi from '../artifacts/contracts/Ballot.sol/Ballot.json';
require('dotenv').config();
const ethers = require("ethers");


function Dashboard() {

    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    const [state, setState] = useState({
        provider: null,
        signer: null,
        contract: null,
    });
    const [account, setAccount] = useState("None");

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            loginWithRedirect({
                appState: {
                    targetUrl: window.location.href,
                },
            });
        }

        const connectWallet = async () => {
            const contractAddress = process.env.REACT_APP_contractAddress;
            const contractABI = abi.abi;
            try {
                const { ethereum } = window;

                if (ethereum) {
                    const account = await ethereum.request({
                        method: "eth_requestAccounts",
                    });

                    window.ethereum.on("chainChanged", () => {
                        window.location.reload();
                    });

                    window.ethereum.on("accountsChanged", () => {
                        window.location.reload();
                    });

                    const provider = new ethers.providers.Web3Provider(ethereum);
                    const signer = provider.getSigner();
                    const contract = new ethers.Contract(
                        contractAddress,
                        contractABI,
                        signer
                    );
                    setAccount(account);
                    setState({ provider, signer, contract });
                } else {
                    alert("Please install metamask");
                }
            } catch (error) {
                console.log(error);
            }
        };
        connectWallet();
    }, [isLoading, isAuthenticated]);

    if (isLoading || !isAuthenticated) {
        return <Loading loading={isLoading} size="large" />;
    }

    return (
        <div><h1 class="text-5xl font-bold mx-48 mt-32 font-mono">Dashboard</h1>
            <VoterProfile />

            <div class="container px-10 mx-0 min-w-full flex flex-col items-center">
                <div style={{ height: '50px' }}><h1 class="text-2xl font-bold leading-none tracking-tight text-gray-900">
                    {account !== "None"
                        ? `Connected Account: ${account.substring(
                            0,
                            9
                        )}.....${account.substring(35)}`
                        : ""}</h1>
                </div>

                {account !== "None" ?
                    <button type="button" class="flex flex-col items-center py-2 px-4 text-3xl font-medium text-center text-white border bg-gray-800 border-orange-500 hover:bg-gray-700 focus:ring-4 focus:ring-orange-300 focus:outline-none rounded-lg mr-3 md:mr-0">
                        VOTE
                    </button>
                    :
                    <button type="button" class="flex flex-col items-center py-2 px-4 text-3xl font-medium text-center text-white border bg-gray-800 border-orange-500 hover:bg-gray-700 focus:ring-4 focus:ring-orange-300 focus:outline-none rounded-lg mr-3 md:mr-0">
                        Connect Wallet
                    </button>
                }

            </div>


        </div>

    );
}

export default Dashboard;