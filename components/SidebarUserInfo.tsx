'use client'
import { auth } from '@/firebase'
import { closeLogInModal, closeSignInModal } from '@/redux/slices/modalSlice'
import { signOutUser } from '@/redux/slices/userSlice'
import { AppDispatch, RootState } from '@/redux/store'
import { signOut } from 'firebase/auth'
import Image from 'next/image'
import React from 'react' 
import { useDispatch, useSelector } from 'react-redux'

//
// import { auth } from '@/firebase'
// import { AppDispatch, RootState } from '@/redux/store'
// import { signOut } from 'firebase/auth'
// import { useDispatch, useSelector } from 'react-redux'
// import { signOutUser } from '@/redux/slices/userSlice'
//import { signOutUser } from '@/redux/slices/userSlice'
//




export default function SidebarUserInfo() {

//practive below

    // const dispatch: AppDispatch = useDispatch();
    // const user = useSelector((state: RootState) => state.user )
     
    // async function handleSignOut() {
    //     await signOut(auth);

    //     dispatch(signOutUser())
    //   }

// all this is deleted after practice
 


  //} maybe deelete
  const dispatch: AppDispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user)

  async function handleSignOut() {
    //sign out from firebase and redux
    await signOut(auth);
    
    dispatch(signOutUser());

    //after signing out of acct., use dispatch the "close..." to prevent the modal from auto popup
    dispatch(closeSignInModal());
    dispatch(closeLogInModal());

  }

  return (
    <>
    <div className="absolute bottom-3 flex items-center justify-start
              space-x-2 xl:p-3 xl:pr-6 hover:bg-gray-500 hover:bg-opacity-10
              rounded-full transition cursor-pointer w-fit xl:w-[240px]
              "
            onClick={() => handleSignOut()}

              //onClick={() => handleSignOut()}
              //above should deleted before practice
              >
    
                <Image 
                src={'/assets/profile-pic.png'}
                width={48}
                height={48}
                alt="Profile Picture"
                className="w-9 h-9"
                />
    
                <div className="hidden xl:flex flex-col text-sm max-w-40 ">
                  <span className="whitespace-nowrap text-ellipsis overflow-hidden
                   font-bold ">{user.name}</span>
                  <span className="whitespace-nowrap text-ellipsis overflow-hidden
                   text-gray-500">@{user.username}</span>
                </div>
    
              </div>
      
    </>
  )
}
