import React from 'react';

function Footer() {
    return (
        <div>
        <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6">
            <span class="text-sm text-gray-500 sm:text-center ">© 2023 <a href="https://flowbite.com/" class="hover:underline">Vote IN</a>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 ">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>
        </div>
    );
}

export default Footer;