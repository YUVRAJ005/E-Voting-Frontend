import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import VoteIN_Logo from '../assets/VoteIN_Logo.png';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

function Navbar() {
    const { isAuthenticated } = useAuth0();
    return (

        <nav class="bg-white fixed w-full z-20 top-0 left-0 border-gray-200">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/voterIDApplication" class="flex items-center">
                    <img src={VoteIN_Logo} class="h-10 w-10 mr-3" alt="Vote Now" />
                    <span class="self-center text-2xl text-gray-800 font-bold whitespace-nowrap ">Vote IN</span>
                </Link>
                <div class="flex md:order-2">
                    {
                        isAuthenticated ? (<LogoutButton />) : (<LoginButton />)
                    }
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">

                    <div class="text-base font-medium text-center text-gray-800 border-b border-gray-200 ">
                        <ul class="flex flex-wrap -mb-px">
                            <li class="mr-2">
                                <Link to="/" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-orange-600 hover:border-gray-300 ">
                                    Home
                                </Link>
                            </li>
                            <li class="mr-2">
                                <Link to="/" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-orange-600 hover:border-gray-300 ">
                                    Live
                                </Link>
                            </li>
                            <li class="mr-2">
                                <Link to="/" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-orange-600 hover:border-gray-300 ">
                                    Results
                                </Link>
                            </li>
                            <li class="mr-2">
                                <Link to="/About" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-orange-600 hover:border-gray-300 ">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;


