import React, { useState, useEffect } from 'react';
import { Link, Navigate, Redirect } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import Loading from '../components/Loading';
import VoterProfile from '../components/Dashboard/VoterProfile'
import CandidateCard from '../components/Dashboard/CandidateCard';


function Vote() {

    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    const [walletAddress, setWalletAddress] = useState("");

    useEffect(() => {
        getCurrentWalletConnected();
        addWalletListener();
    }, [walletAddress]);

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
    }, [isLoading, isAuthenticated]);

    if (isLoading || !isAuthenticated) {
        return <Loading loading={isLoading} size="large" />;
    }


    var candidates = [{"Candidate":"ABC", "Party":"BJP" },{"Candidate":"DEF", "Party":"Congress" }];

    const todoItems = candidates.map((candidateinfo) =>
        <CandidateCard candidate={candidateinfo.Candidate}  party={candidateinfo.Party}/>
    );


    return (
        <div>
            <h1 class="text-xl font-bold mx-48 mt-32 font-mono">Assembly Elections</h1>

            <div class="mx-48 font-mono"><h1 class="text-xl font-bold font-mono leading-none tracking-tight ">
                {walletAddress && walletAddress.length > 0
                    ? `Connected Account: ${walletAddress.substring(
                        0,
                        9
                    )}.....${walletAddress.substring(35)}`
                    : ""}</h1>
            </div>

            <div class="flex flex-col justify-center items-center  pt-4">
                <div class="grid grid-cols-3 gap-5">
                    {todoItems}
                </div>
            </div>


        </div>

    );

}

export default Vote;