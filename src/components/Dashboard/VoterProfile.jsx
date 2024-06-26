import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import Waiting from '../../components/Waiting';



function VoterProfile() {
    const { user } = useAuth0();
    const [profile, setProfile] = useState({});
    const [pleaseWait, setWait] = useState(true);
    console.log(user)

    useEffect(() => {

        axios.get(process.env.REACT_APP_SERVER + '/user/profile/' + user.nickname)
            .then((response) => {
                setWait(false);
                setProfile(response.data);

            })
            .catch(function (error) {
                console.log(error);
            });

    }, [pleaseWait]);



    return (
        <div>

            <div class="mb-9 px-4 mx-auto max-w-screen-xl ">
                {
                    0 ?
                        <div>
                            <Waiting size="large" />
                        </div>
                        :
                        <div class="bg-white p-3 shadow-lg rounded-sm">
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>
                                <span class="tracking-wide">Profile</span>
                            </div>

                            <div class="text-gray-700">
                                <div class="grid md:grid-cols-2 text-sm">
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Name</div>
                                        <div class="px-4 py-2">{profile.name}</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Gender</div>
                                        <div class="px-4 py-2">{profile.gender}</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Date of Birth</div>
                                        <div class="px-4 py-2">{profile.dob}</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Age</div>
                                        <div class="px-4 py-2">{profile.age}</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Email</div>
                                        <div class="px-4 py-2">{profile.email}</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Contact No.</div>
                                        <div class="px-4 py-2">{profile.phone}</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Address</div>
                                        <div class="px-4 py-2">{profile.address}</div>
                                    </div>
                                    <div class="grid grid-cols-2">
                                        <div class="px-4 py-2 font-semibold">Pincode</div>
                                        <div class="px-4 py-2">{profile.pincode}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>


        </div>

    );
}

export default VoterProfile;