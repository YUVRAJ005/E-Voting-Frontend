import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import VoterProfile from '../components/Dashboard/VoterProfile';
import Loading from '../components/Loading';
import abi from '../artifacts/contracts/Election.sol/Election.json';
import Candidate from "../assets/candidate.png";
require('dotenv').config();
const ethers = require("ethers");


function Elections() {

    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [election, setElection] = useState("");

    const fetchdetails = async () => {
        try {
            const contractAddress = process.env.REACT_APP_contractAddress;
            const contractABI = abi.abi;

            const provider = new ethers.JsonRpcProvider(process.env.REACT_APP_SEPOLIA_RPC_URL);
            const contract = new ethers.Contract(
                contractAddress,
                contractABI,
                provider
            );


            let elec = await contract.getElection();
            setElection(elec);
            console.log("Election name is : " + election);

            let start = await contract.getElectionStartTime();
            start = Number(start)
            var date = new Date(start * 1000);
            setStartTime(date.toString());
            console.log("Election start time is : " + startTime);


            let end = await contract.getElectionEndTime();
            end = Number(end)
            date = new Date(end * 1000);
            setEndTime(date.toString());
            console.log("Election end time is  : " + endTime);


        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchdetails();
    }, []);

    return (
        <div><h1 class="text-3xl font-bold mx-48 mt-32 font-mono">Election Timings</h1>

            <div class="rounded shadow text-grey-600 mx-48 my-6 bg-white">

                <h1 class="text-2xl font-bold mx-10 font-mono">{election}</h1>
                <h3 class="text-2xl font-bold mx-10 font-mono">Start Time : {startTime}</h3>
                <h3 class="text-2xl font-bold mx-10 font-mono">End Time : {endTime}</h3>

            </div>

        </div>

    );
}

export default Elections;