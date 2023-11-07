import React from "react";
import loading from "../assets/loading.svg";

const Loading = () => (
    <div class="flex items-center justify-center h-screen">
        <div className="spinner">
            <img src={loading} alt="Loading" />
        </div>
    </div>

);

export default Loading;