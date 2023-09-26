import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function VoterIdApplication() {
    return (
        
        <div>
            <Navbar />
            <h1 class="text-5xl font-bold mx-48 mt-36 font-mono">Voter ID Application</h1>
            <div class="mx-48 my-10 rounded overflow-hidden shadow-lg" >
                <div class="mx-10 my-10">
                    <form action="#" method="post">
                        <div class="grid md:grid-cols-2 md:gap-10">
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" maxLength="15" name="fname" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                                <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" maxLength="15" name="lname" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                                <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                            </div>
                        </div>

                        <div class="grid md:grid-cols-2 md:gap-10">
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="email" name="email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <input type="tel" pattern="[6-9]{1}-[0-9]{1}-[0-9]{8}" name="phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder="" required />
                                <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                            </div>
                        </div>

                        <div class="grid md:grid-cols-2 md:gap-10 pb-3">

                            <div class="relative z-0 w-full mb-6 group">
                                <input type="text" maxLength="100" name="address" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                                <label for="address" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                            </div>

                            <div class="relative z-0 w-full mb-6 group">
                                <input type="number" name="pincode" pattern="[1-9]{1}-[0-9]{5}" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                                <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pincode</label>
                            </div>
                        </div>
                        <button type="button" class="text-white border bg-gray-800 border-orange-500 hover:bg-gray-700 focus:ring-4 focus:ring-orange-300 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default VoterIdApplication;