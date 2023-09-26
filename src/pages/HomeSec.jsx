import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink, Navigate } from 'react-router-dom'
import Vote_Now from '../assets/Vote_Now.jpg';
import VoteNow from '../components/VoteNow';

function HomeSec() {
    return (
    <div>
        <section class="bg-white mt-16">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                <div class="flex flex-col justify-center">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-800 md:text-5xl lg:text-6xl ">A person without a vote is a person without protection.</h1>
                    <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl ">Elections belong to you people. It's your decision. It's not enough to just want change ... You have to make change by voting.</p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <VoteNow />
                        <Link to='/voterIDApplication' class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-800 rounded-lg border border-gray-300 hover:bg-orange-300 focus:ring-4 focus:ring-gray-100 ">
                            Apply for Voter ID
                        </Link>
                    </div>
                </div>
                <div>
                    <img class="" src={Vote_Now} alt="Vote India" />
                </div>
            </div>
        </section>
    </div>

)};

export default HomeSec;