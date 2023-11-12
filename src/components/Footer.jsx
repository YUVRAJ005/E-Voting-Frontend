import React from 'react';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6">
                <span class="text-sm text-gray-500 sm:text-center ">VoteIN © 2023
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 ">
                    <li>
                        <Link to='/About' class="mr-4 hover:underline md:mr-6">About</Link>
                    </li>
                    <li>
                        <Link to='/About' class="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to='/About' class="mr-4 hover:underline md:mr-6">Licensing</Link>
                    </li>
                    <li>
                        <Link to='/About' class="hover:underline">Contact</Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;