"use client";

import { auth } from "@/firebase";
import { closeLogInModal, closeSignInModal, openLogInModal, openSignInModal } from "@/redux/slices/modalSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Modal } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LogInModal() {
  //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  //
  const [showPassword, setShowPassword] = useState(false);

  const isOpen = useSelector(
    (state: RootState) => state.modals.logInModalOpen
  );
  const dispatch: AppDispatch = useDispatch();

  //since we already have an acct. we have to "Log In"
  async function handleLogIn() {
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    
    )
  }
//U have 2 create an "Guest account" on firebase first, 2 use Login as Guest
  
  async function handleGuestLogIn() {
    await signInWithEmailAndPassword(
      auth,
      "guest123@gmail.com",
      "123456789"
    );
  }


  //
  return (
    <>
      <button
        className="w-full h-[48px] md:w-[88px] md:h-[40px]
         text-md md:text-sm border-2 border-white
          bg-white rounded-full font-bold hover:bg-gray-100 
          transition    "
          
        onClick={() => dispatch(openLogInModal())}
      >
        Log In
      </button>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLogInModal())}
        className="flex justify-center items-center "
      >
        <div className="w-full h-full sm:w-[600px] sm:h-fit
         bg-white sm:rounded-xl outline-none  ">
          <XMarkIcon
            className="w-7 mt-5 ml-5 cursor-pointer "
            onClick={() => dispatch(closeLogInModal())}
          />



          <div className="pt-10 pb-20 px-4 sm:px-20  ">
            <h1 className="text-3xl font-bold mb-10  ">Log in to Busy Bee</h1>

            <div className="w-full space-y-5 mb-10  ">
              
              <input
                className="w-full h-[54px] border border-gray-200 outline-none pl-3 rounded-[4px] focus:border-[#F4AF01] transition  "
                type="text"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />


              <div
                className="w-full h-[54px] border border-gray-200 outline-none pl-3 rounded-[4px] focus-within:border-[#F4AF01] transition  
flex items-center overflow-hidden pr-3
"
              >
                <input
                  className="w-full h-full ps-3 outline-none  "
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                />

                <div
                  className="w-7 h-7 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </div>
              </div>


            </div>


            <button
              className="bg-[#F4AF01] text-white h-[48px]
          rounded-full shadow-md mb-5 w-full  "

          //
          onClick={() => handleLogIn()}
          //

            >
              Log In 
            </button>

            <span className="mb-5 text-sm text-center block  ">Or</span>

            <button
              className="bg-[#F4AF01] text-white h-[48px]
          rounded-full shadow-lg mb-5 w-full "
          //
          onClick={() => handleGuestLogIn()}
          //
            >
              Log In as Guest
            </button>


          </div>



        </div>
      </Modal>
    </>
  );
}
