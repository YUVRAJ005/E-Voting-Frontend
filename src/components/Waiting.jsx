import React from "react";
import waiting from "../assets/waiting.svg";

const Waiting = () => (
    <div class="flex justify-center h-screen">
        <div className="spinner">
            <img src={waiting} alt="Loading" />
        </div>
    </div>

);

export default Waiting;