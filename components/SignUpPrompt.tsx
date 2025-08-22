"use client"
//delete above when practicing again


import React from "react";
import SignUpModel from "./modals/SignUpModal";
import LogInModal from "./modals/LogInModal";


import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
//

export default function SignUpPrompt() {

  
  // const username = useSelector((state: RootState) =>
  // state.user.username
  // );

  //delete above when practicing again

  const username = useSelector((state: RootState) => state.user.username);



  return (
    !username &&
    // !username &&
    //if username doesn't exist, then render everything below, 

    // delete above when practicing again
    <>
      <div
        className="fixed bottom-0 flex justify-center items-center w-full h-[80px] bg-[#F4AF01] md:space-x-5
    lg:justify-between lg:px-20 xl:px-40 2xp:px-80
    "
      >
        <div className="hidden md:flex flex-col text-white  ">
          <span className="text-xl font-bold ">Don't miss out on the buzz</span>
          <span>People on Busy Bee are always the first to know.</span>
        </div>

        <div className="flex space-x-2 w-full md:w-fit p-3  ">
          {/* <button className="w-full h-[48px] md:w-[88px] md:h-[40px] text-md md:text-sm border-2 border-gray-100 rounded-full text-white font-bold hover:bg-white hover:bg-opacity-25 transition    ">
            Log In
          </button> */}
          {/* <button className="w-full h-[48px] md:w-[88px] md:h-[40px] text-md md:text-sm border-2 border-white bg-white rounded-full font-bold hover:bg-gray-100 transition    ">
          Sign In
        </button>  */}
        <LogInModal />

          <SignUpModel />


        </div>
      </div>
    </>
  );
}
