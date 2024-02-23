import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import VoterProfile from '../components/Dashboard/VoterProfile';
import Loading from '../components/Loading';
import abi from '../artifacts/contracts/Election.sol/Election.json';
import VerifyEmail from '../components/VerifyEmail';
require('dotenv').config();
const ethers = require("ethers");


function Dashboard() {

    const { isAuthenticated, isLoading, loginWithRedirect, user } = useAuth0();
    console.log(user)
    const [walletAddress, setWalletAddress] = useState("");

    const votenavigate = useNavigate();

    function handlevoteClick() {
        votenavigate("/Vote");
    }

    // const connectContract = async () => {
    //     const contractAddress = process.env.REACT_APP_contractAddress;
    //     const contractABI = abi.abi;
    //     try {
    //         const { ethereum } = window;
    //         if (ethereum) {
    //             const provider = new ethers.JsonRpcProvider(process.env.REACT_APP_SEPOLIA_RPC_URL);
    //             const contract = new ethers.Contract(
    //                 contractAddress,
    //                 contractABI,
    //                 provider
    //             );

    //             let elec = await contract.getElection();
    //             console.log("Election name is : " + elec);

    //         } else {
    //             alert("Please install metamask");
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }

    // };

    const connectWallet = async () => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
            try {
                /* MetaMask is installed */
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setWalletAddress(accounts[0]);
                console.log(accounts[0]);
            } catch (err) {
                console.error(err.message);
            }
        } else {
            /* MetaMask is not installed */
            console.log("Please install MetaMask");
        }
    };

    const getCurrentWalletConnected = async () => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_accounts",
                });
                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]);
                    console.log(accounts[0]);
                } else {
                    console.log("Connect to MetaMask using the Connect button");
                }
            } catch (err) {
                console.error(err.message);
            }
        } else {
            /* MetaMask is not installed */
            console.log("Please install MetaMask");
        }
    };

    const addWalletListener = async () => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
            window.ethereum.on("accountsChanged", (accounts) => {
                setWalletAddress(accounts[0]);
                console.log(accounts[0]);
            });
        } else {
            /* MetaMask is not installed */
            setWalletAddress("");
            console.log("Please install MetaMask");
        }
    };


    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            loginWithRedirect({
                appState: {
                    targetUrl: window.location.href,
                },
            });
        }
        getCurrentWalletConnected();
        addWalletListener();
        //connectContract();

    }, [isLoading, isAuthenticated, walletAddress]);

    if (isLoading || !isAuthenticated) {
        return <Loading loading={isLoading} size="large" />;
    }
    else if (!user.email_verified) {
        return <VerifyEmail />;
    }


    return (
        <div><h1 class="text-3xl font-bold py-6 px-4 mx-auto max-w-screen-xl mt-36 font-mono">Dashboard</h1>
            <VoterProfile />

            <div class="container px-10 mx-0 min-w-full flex flex-col items-center">
                <div style={{ height: '50px' }}><h1 class="text-2xl font-bold leading-none tracking-tight text-gray-900">
                    {walletAddress && walletAddress.length > 0
                        ? `Connected Account: ${walletAddress.substring(
                            0,
                            9
                        )}.....${walletAddress.substring(35)}`
                        : ""}</h1>
                </div>

                {walletAddress && walletAddress.length > 0 ?
                    <button onClick={handlevoteClick} type="button" class="flex flex-col items-center py-2 px-4 text-2xl font-medium text-center text-white border bg-gray-800 border-orange-500 hover:bg-gray-700 focus:ring-4 focus:ring-orange-300 focus:outline-none rounded-lg mr-3 md:mr-0">
                        VOTE
                    </button>
                    :
                    <button onClick={connectWallet} type="button" class="flex flex-col items-center py-2 px-4 text-2xl font-medium text-center text-white border bg-gray-800 border-orange-500 hover:bg-gray-700 focus:ring-4 focus:ring-orange-300 focus:outline-none rounded-lg mr-3 md:mr-0">
                        Connect Wallet
                    </button>
                }

            </div>


        </div>

    );
}

export default Dashboard;