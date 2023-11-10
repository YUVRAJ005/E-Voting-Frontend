import React, { useState, useEffect } from 'react';
import { Link, Navigate, Redirect, useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import Loading from '../components/Loading';
import VoterProfile from '../components/Dashboard/VoterProfile'
//import CandidateCard from '../components/Dashboard/CandidateCard';
import abi from '../artifacts/contracts/Ballot.sol/Ballot.json';
require('dotenv').config();
const ethers = require("ethers");

function Vote() {

    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    const [walletAddress, setWalletAddress] = useState("");

    const [contract, setContract] = useState();
    const [candidate, setCandidate] = useState();
    const [election, setElection] = useState();
    //const voteConfirmNavigate = useNavigate();
    
    function handleConfirmVote(candidateinfo) {
        //voteConfirmNavigate("/VoteConfirm", candidateinfo);
    }

    
    const fetchdetails = async () => {
        try {
            const contractAddress = process.env.REACT_APP_contractAddress;
            const contractABI = abi.abi;
            const { ethereum } = window;
            if (ethereum) {

                const provider = new ethers.JsonRpcProvider(process.env.REACT_APP_SEPOLIA_RPC_URL);
                const contract = new ethers.Contract(
                    contractAddress,
                    contractABI,
                    provider
                );

                let elec = await contract.getElection();
                console.log("Election name is : " + elec);
                setContract(contract);
                setElection(elec);
            

            } else {
                alert("Please install metamask");
            }
        } catch (error) {
            console.log(error);
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
                    console.log("Connected to " + accounts[0]);
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
        fetchdetails();

    }, [isLoading, isAuthenticated, walletAddress]);

    if (isLoading || !isAuthenticated) {
        return <Loading loading={isLoading} size="large" />;
    }

    //var candidates = [{ "Candidate": "ABC", "Party": "BJP" }, { "Candidate": "DEF", "Party": "Congress" }];


    return (
        <div>
            <h1 class="text-xl font-bold mx-48 mt-32 font-mono">{election}</h1>

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
                <div>
            <div class="each flex rounded shadow w-max text-grey-600 mb-5 bg-white">
                <div class="sec self-center p-2 pr-1"><img data="picture" class="h-20 w-200 border p-0.5 square-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1-MG1E0b4Ylgp-wnZjy82g3ZKHyx_FVDy00FfqqOk5y8euX43uhU4lN11y1qkG_Pjhwc" alt="" /></div>
                <div class="sec self-center p-2 w-64">
                    <div class="name text-lg">{candidate[0]}</div>
                    <div class="title text-base text-gray-800 -mt-1">{candidate[1]}</div>
                </div>
            </div>
        </div>
                </div>
            </div>


        </div>

    );

}

export default Vote;