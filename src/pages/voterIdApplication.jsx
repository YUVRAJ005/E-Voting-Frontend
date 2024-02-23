import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApplicationSuccess from '../components/ApplicationSuccess';

function VoterIdApplication() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let [phone, setPhone] = useState("");
    const [name, setname] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    var [dob, setDOB] = useState("");
    let [pincode, setPincode] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {

    }, [submitted]);

    async function handleSubmit(e) {
        phone = Number(phone);
        pincode = Number(pincode);
        const vApplication = { name: name, gender: gender, dob: dob, phone: phone, email: email, password: password, address: address, pincode: pincode };

        //console.log(vApplication);

        axios.post(process.env.REACT_APP_SERVER + '/register/voterRegistration', vApplication)
            .then((response) => {
                console.log(response);
                setSubmitted(true);
            })
            .catch((error) => {
                console.log(error);
            });

        e.preventDefault();
    };

    return (

        <div>
            {!submitted &&
                <div>
                    <h1 class="text-3xl font-bold mx-48 mt-36 font-mono">Voter ID Application</h1>
                    <div class="mx-48 my-10 rounded overflow-hidden shadow-lg" >
                        <div class="mx-10 my-10">
                            <form onSubmit={handleSubmit}>
                                <div class="grid md:grid-cols-2 md:gap-10">
                                    <div class="relative z-0 w-full mb-6 group">
                                        <input value={name} onChange={e => setname(e.target.value)} type="text" maxLength="15" name="name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                                        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>
                                    </div>
                                    <div class="grid md:grid-cols-2 md:gap-10">
                                        <div class="relative z-0 w-full mb-6 group">
                                            <select id="Genderselect" value={gender} onChange={e => setGender(e.target.value)} name="gender" class="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" required>
                                                <option value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            <label for="floating_gender" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gender</label>
                                        </div>
                                        <div class="relative z-0 w-full mb-6 group">
                                            <input value={dob} onChange={e => setDOB(e.target.value)} type="date" id="DOB" name="DOB" class="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" required />
                                            <label for="floating_dob" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date of Birth</label>
                                        </div>

                                    </div>
                                </div>

                                <div class="grid md:grid-cols-2 md:gap-10">
                                    <div class="grid md:grid-cols-2 md:gap-10">
                                        <div class="relative z-0 w-full mb-6 group">
                                            <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" pattern="[6-9]{1}[0-9]{1}[0-9]{8}" name="phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                                            <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                                        </div>
                                        <div class="relative z-0 w-full mb-6 group">
                                            <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                        </div>
                                    </div>

                                    <div class="relative z-0 w-full mb-6 group">
                                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" minLength="8" id="floating_phone" name="password" class="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                                        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                    </div>

                                </div>

                                <div class="grid md:grid-cols-2 md:gap-10 pb-3">

                                    <div class="relative z-0 w-full mb-6 group">
                                        <input value={address} onChange={e => setAddress(e.target.value)} type="text" maxLength="100" name="address" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                                        <label for="address" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                                    </div>

                                    <div class="relative z-0 w-full mb-6 group">
                                        <input value={pincode} onChange={e => setPincode(e.target.value)} type="tel" name="pincode" pattern="[1-9]{1}[0-9]{5}" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
                                        <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pincode</label>
                                    </div>
                                </div>
                                <button type='submit' class="text-white border bg-gray-800 border-orange-500 hover:bg-gray-700 focus:ring-4 focus:ring-orange-300 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>}
            {submitted && <ApplicationSuccess />}
        </div>

    );
}

export default VoterIdApplication;