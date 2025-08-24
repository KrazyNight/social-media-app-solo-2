"use client";

//import { auth } from "@/firebase";
import { closeSignInModal, openSignInModal } from "@/redux/slices/modalSlice";
//import { signInUser } from "@/redux/slices/userSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Modal } from "@mui/material";
//import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "@/firebase";
import { signInUser } from "@/redux/slices/userSlice";


export default function SignUpModal() {
  //
  //const [name, setName] = useState("");
  //const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');
//
const [email, setEmail] = useState("");
const [password, setPassword] = useState(""); 
const [name, setName] = useState("");

const [showPassword, setShowPassword] = useState(false);
  const isOpen = useSelector(
    (state: RootState) => state.modals.signInModalOpen
  );
  const dispatch: AppDispatch = useDispatch();

//

// async function handleSignUp() {
//   const userCredentials = await createUserWithEmailAndPassword(
//     auth,
//     email,
//     password
//   );
//   await updateProfile(userCredentials.user, {
//     displayName: name
//   });
//   dispatch(signInUser({
//     name: userCredentials.user.displayName,
//     username: userCredentials.user.email!.split("@")[0],
//     email: userCredentials.user.email,
//     uid: userCredentials.user.uid,
//   }))

// }

// useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//     if (!currentUser) return

//     //Redux Action 
//     dispatch(signInUser({
//       name: "",
//       username: currentUser.email!.split("@")[0],
//       email: currentUser.email,
//       uid: currentUser.uid,
//     }))


//   } )
//   return unsubscribe 
// }, [])

//
 
  async function handleSignUp() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredentials.user, {
      displayName: name,

    });
    dispatch(signInUser({
      name: userCredentials.user.displayName,
      username: userCredentials.user.email!.split("@")[0],
      email: userCredentials.user.email,
      uid: userCredentials.user.uid,
    }))
  }


  //this was copy/paste form LogInModal

  async function handleGuestLogIn() {
      await signInWithEmailAndPassword(
        auth,
        "guest123@gmail.com",
        "123456789"
      );
    }

  //this was copy/paste from LogInModal

  useEffect(() => {
    //keep track of onAuthStateChange
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return 

      //redux actions
      dispatch(signInUser({
        name: currentUser.displayName,
        username: currentUser.email!.split("@")[0],
        email: currentUser.email,
        uid: currentUser.uid,
      }))

    })
    return unsubscribe
  }, [])
  
  

  return (
    <>
      <button
        className="w-full h-[48px] md:w-[88px] md:h-[40px] text-md md:text-sm border-2 border-white bg-white rounded-full font-bold hover:bg-gray-100 transition    "
        onClick={() => dispatch(openSignInModal())}
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignInModal())}
        className="flex justify-center items-center "
      >
        <div className="w-full h-full sm:w-[600px] sm:h-fit bg-white sm:rounded-xl  ">
          <XMarkIcon
            className="w-7 mt-5 ml-5 cursor-pointer "
            onClick={() => dispatch(closeSignInModal())}
          />


          <div className="pt-10 pb-20 px-4 sm:px-20   ">
            <h1 className="text-3xl font-bold mb-10  ">Create your account</h1>
            <div className="w-full space-y-5 mb-10  ">
              <input
                className="w-full h-[54px] border border-gray-200 
              outline-none pl-3 rounded-[4px] focus:border-[#F4AF01] transition    "
                placeholder="Name"
                type="text"
                onChange={(event) => setName(event.target.value)}
                value={name}

                //
                // onChange={(event) => setName(event.target.value)}
                //value={}
                //
              />

              <input
                className="w-full h-[54px] border border-gray-200 
              outline-none pl-3 rounded-[4px] focus:border-[#F4AF01] transition    "
                placeholder="Email"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
//
                //onChange={(event) => setEmail(event.target.value)}
                //value={email}
//
              />
              <div
                className="w-full h-[54px] border border-gray-200 
              outline-none rounded-[4px] focus-within:border-[#F4AF01] transition    
flex items-center overflow-hidden pr-3  "
              >
                
                <input
                  className="w-full h-full pl-3 outline-none  "
                  placeholder="Password"
                  type={showPassword ? "text": "Password"}

                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
//
                  // onChange={(event) => setPassword(event.target.value)}
                  // value={password}
//
                />

                <div className="w-7 h-7 text-gray-400 cursor-pointer  "
                onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </div>
              </div>
            </div>
<button
              className="bg-[#F4AF01] text-white h-[48px]
          rounded-full shadow-md mb-5 w-full  "
          onClick={() => handleSignUp()}

  //
        //  onClick={() => handleSignUp()}
  //  
            >
              Sign In
            </button>

            <span className="mb-5 text-sm text-center block  ">Or</span>

            <button
              className="bg-[#F4AF01] text-white h-[48px]
          rounded-full shadow-lg mb-5 w-full "

          //
          onClick={() => handleGuestLogIn()}
              // onClick={() => handleGuestLogIn()}

            >
              Log In as Guest
            </button>
            
          </div>
        </div>
      </Modal>

      {/* <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignInModal())}
        className="flex justify-center items-center "
      >
        <div className="w-full h-full sm:w-[600px] sm:h-fit bg-white sm:rounded-xl  ">
          <XMarkIcon
            className="w-7 mt-5 ml-5 cursor-pointer "
            onClick={() => dispatch(closeSignInModal())}
          />



          <div className="pt-10 pb-20 px-4 sm:px-20  ">
            <h1 className="text-3xl font-bold mb-10  ">Create your account</h1>

            <div className="w-full space-y-5 mb-10  ">
              <input
                className="w-full h-[54px] border border-gray-200 outline-none pl-3 rounded-[4px] focus:border-[#F4AF01] transition  "
                type="text"
                placeholder="Name"
              />
              <input
                className="w-full h-[54px] border border-gray-200 outline-none pl-3 rounded-[4px] focus:border-[#F4AF01] transition  "
                type="email"
                placeholder="Email"
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
              // onClick={() => dispatch(openSignInModal())}
            >
              Sign In
            </button>

            <span className="mb-5 text-sm text-center block  ">Or</span>

            <button
              className="bg-[#F4AF01] text-white h-[48px]
          rounded-full shadow-lg mb-5 w-full "
              // onClick={() => dispatch(openLogInModal())}
            >
              Log In
            </button>


          </div>



        </div>
      </Modal> */}
    </>
  );
}
