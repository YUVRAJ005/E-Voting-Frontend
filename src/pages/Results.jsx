import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import VoterProfile from '../components/Dashboard/VoterProfile';
import Loading from '../components/Loading';
import abi from '../artifacts/contracts/Election.sol/Election.json';
import Candidate from "../assets/candidate.png";
require('dotenv').config();
const ethers = require("ethers");


function Results() {

    const [candidate, setCandidate] = useState([]);
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
            let candidates = await contract.getCandidates();
            setCandidate(candidates);
            console.log(candidate);
            console.log(candidate[1][3])
            console.log(typeof(candidate[1][3]))

        } catch (error) {
            console.log(error);
        }
    };

    const clist = candidate.map((candidateinfo) =>
        <div key={candidateinfo[0]} class="flex rounded shadow text-grey-600 mx-48 my-6 bg-white">

            <div class="each flex rounded shadow w-1/2 text-grey-600 my-2 mx-2 bg-white">
                <div class="sec self-center p-2 pr-1"><img data="picture" class="h-20 w-200 border p-0.5 square-full" src={Candidate} alt="" /></div>
                <div class="sec self-center p-2 w-64">
                    <div class="name text-lg">{candidateinfo[0]}</div>
                    <div class="title text-base text-gray-800 -mt-1">{candidateinfo[1]}</div>
                </div>
            </div>

            <div class="w-1/2 m-auto">
                <h1 class="text-2xl font-bold mx-48 font-mono">Vote Count</h1>
                <h1 class="text-2xl font-bold mx-40 font-mono">{"-> " + Number(candidateinfo[3])}</h1>
            </div>

        </div>
    );

    useEffect(() => {
        fetchdetails();
    }, []);

    return (
        <div><h1 class="text-3xl font-bold mx-48 mt-32 font-mono">{election} Results</h1>

            {clist}

        </div>

    );
}

export default Results;