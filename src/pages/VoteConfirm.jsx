import React, { useState, useEffect } from 'react';
import { Link, Navigate, Redirect, useNavigate, useLocation } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import Loading from '../components/Loading';
import Waiting from '../components/Waiting';
import abi from '../artifacts/contracts/Election.sol/Election.json';
import Candidate from "../assets/candidate.png";
require('dotenv').config();
const ethers = require("ethers");

function VoteConfirm() {
    const location = useLocation([]);
    console.log(location.state)

    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    const [walletAddress, setWalletAddress] = useState("");
    const [candidate, setCandidate] = useState();
    const [election, setElection] = useState();
    const [account, setAccount] = useState("");
    const [party, setParty] = useState();
    const [pleaseWait, setWait] = useState(false);
    const { user } = useAuth0();

    const voteSuccessNavigate = useNavigate();
    const voteFailNavigate = useNavigate();

    async function confirmVoteClick() {
        try {
            console.log("Confirm vote " + account);
            const contractAddress = process.env.REACT_APP_contractAddress;
            const contractABI = abi.abi;

            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            console.log(await signer.getAddress());
            const contractFetched = new ethers.Contract(
                contractAddress,
                contractABI,
                signer
            );

            const transaction = await contractFetched.vote(account, user.email);
            setWait(true);
            await transaction.wait();
            console.log("Transaction Success");
            voteSuccessNavigate("/VoteSuccess");
        } catch (err) {
            console.error(err);
            voteFailNavigate("/VoteFail", { state: { errr: err } });
        }
    }

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
        setCandidate(location.state.candidatename);
        setAccount(location.state.account);
        setElection(location.state.election);
        setParty(location.state.party);
        getCurrentWalletConnected();
        addWalletListener();
        // addVote()

    }, [isLoading, isAuthenticated, walletAddress, pleaseWait]);

    if (isLoading || !isAuthenticated) {
        return <Loading loading={isLoading} size="large" />;
    }

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
            <div class="container px-10 mx-0 py-5 min-w-full flex flex-col items-center ">
                <div class="each flex rounded shadow text-grey-600 m-5 w-1/2 bg-gray-50 hover:bg-white" >
                    <div class="sec self-center p-10"><img data="picture" class="h-32 w-32 border p-0.5 square-full" src={Candidate} alt="" /></div>
                    <div class="sec self-center p-2 w-64">
                        <div class="name text-2xl font-bold py-2">{candidate}</div>
                        <div class="title text-xl font-semibold text-gray-800 -mt-1 py-2">{party}</div>
                        <div class="title text-xl font-semibold text-gray-800 -mt-1 py-2">{account.substring(
                            0,
                            14
                        )}.....{account.substring(30)}</div>
                    </div>
                </div>
                {
                    !pleaseWait ? <button onClick={confirmVoteClick} type="button" class="flex flex-col items-center py-2 px-4 text-3xl font-medium text-center text-white border bg-gray-800 border-orange-500 hover:bg-gray-700 focus:ring-4 focus:ring-orange-300 focus:outline-none rounded-lg mr-3 md:mr-0">
                        Confirm Vote
                    </button> :
                        <div>
                            <Waiting size="large" />
                        </div>
                }


            </div>

        </div>

    );

}
//<CandidateCard state={{ candidate: candidate }} />
export default VoteConfirm;