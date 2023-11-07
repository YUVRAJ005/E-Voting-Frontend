import React from "react";
const interact = require('../../scripts/interact');

function CandidateCard(props) {

    return (
        <div>
            <div class="each flex rounded shadow w-max text-grey-600 mb-5 bg-white">
                <div class="sec self-center p-2 pr-1"><img data="picture" class="h-20 w-200 border p-0.5 square-full" src="https://lh3.googleusercontent.com/ogw/ADea4I6N5g9eo7pju00pg3_BF7q6WGS4m6iEzuLJ4iRskA=s32-c-mo" alt="" /></div>
                <div class="sec self-center p-2 w-64">
                    <div class="name text-lg" >{props.candidate}</div>
                    <div class="title text-base text-gray-800 -mt-1">{props.party}</div>
                </div>
            </div>
        </div>
    );
};

export default CandidateCard;