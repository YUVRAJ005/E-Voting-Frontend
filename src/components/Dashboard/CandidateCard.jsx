import React, { useState, useEffect } from "react";

function CandidateCard({ state }) {

    const [candidate, setCandidate] = useState([]);

    //console.log(state.candidate[0]);
    useEffect(() => {
        setCandidate(state.candidate);
    },[]);

    const clist = candidate.map((candidateinfo) =>
        <div>
            <div class="each flex rounded shadow w-max text-grey-600 mb-5 bg-white">
                <div class="sec self-center p-2 pr-1"><img data="picture" class="h-20 w-200 border p-0.5 square-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1-MG1E0b4Ylgp-wnZjy82g3ZKHyx_FVDy00FfqqOk5y8euX43uhU4lN11y1qkG_Pjhwc" alt="" /></div>
                <div class="sec self-center p-2 w-64">
                    <div class="name text-lg">{candidateinfo[0]}</div>
                    <div class="title text-base text-gray-800 -mt-1">{candidateinfo[1]}</div>
                </div>
            </div>
        </div>
    );

    return (
        <div class="flex flex-col justify-center items-center  pt-4">
            <div class="grid grid-cols-3 gap-5">
                {clist}
            </div>
        </div>
    );
};

export default CandidateCard;