import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const VoteNow = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} type="button" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white border bg-gray-800 border-orange-500 hover:bg-gray-700 focus:ring-4 focus:ring-orange-300 focus:outline-none rounded-lg mr-3 md:mr-0">Vote Now{' >'}</button>;
};

export default VoteNow;