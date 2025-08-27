//db
"use client"
import { db } from '@/firebase'
import { closeCommentModal, setCommentDetails } from '@/redux/slices/modalSlice'
import { AppDispatch, RootState } from '@/redux/store'
//db
import { CalendarIcon, ChartBarIcon, FaceSmileIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline'
import { addDoc, arrayUnion, collection, doc, serverTimestamp, updateDoc, } from 'firebase/firestore'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//del comment
// interface PostInputProps {
//   insideModal?: boolean
// }
//del comment , also del the bottom continuation 

export default function PostInput() {
// //db
//   const [text, setText] = useState(""); 
//   const user = useSelector((state: RootState) => state.user)

//   async function sendPost() {
//     await addDoc(collection(db, "posts "), {
//       //what do we want to have inside of the post: who wrote the most?(use Redux), text/comment,
//       text: text,
//       name: user.name,
//       username: user.username,
//       timestamp: serverTimestamp(),
//       likes: [],
//       comments: []  
//     });
// // after we have sent the post/comment to the db, we need the text in the input to disapear
//     setText("");
    

//   }
// //db the "posts" comes from the website, db

  const [text, setText] = useState("");
  const user = useSelector((state: RootState) => state.user)

  // //del below comment
  // const commentDetails = useSelector((state: RootState) => state.modals.commentPostDetails);
  // const dispatch: AppDispatch = useDispatch();
  // //del above comments

  async function sendPost() {
    await addDoc(collection(db, "posts"), {
      text: text,
      name: user.name,
      username: user.username,
      timestamp: serverTimestamp(),
      likes: [],
      comments: [],
    });

    setText("");
  }

// // del comment below
//   async function sendComment() {
//     const postRef = doc(db, "posts", commentDetails.id);
    
//     await updateDoc(postRef, {
//       comments: arrayUnion({
//         name: user.name,
//         username: user.username,
//         text: text,
//       }),
//     });

//     setText("");
//     dispatch(closeCommentModal());
//   }
  
// del comment above
  return (
    <>
    <div className='flex space-x-5 p-3 
    border-b border-gray-300
    '>
        <Image 
        // src={insideModal ? "/assets/profile-pic.png" : "/assets/busybee-logo2.png"}
//del comment above
        src="/assets/busybee-logo2.png"  
        width={44}
        height={44 }


        // alt={insideModal ? "Profile Picture " : "Logo"}
//del comment above
alt= "Logo"
        className='w-11 h-11 '
//del comment z-score and bg-white
        />
        <div className='w-full bg-slate-50 '>
            <textarea className='resize-none w-full
            min-h-[50px] text-lg
            bg-slate-50
            '
            // placeholder={insideModal ? "Send your reply" : "What's happening!?"}
//del above
            placeholder= "What's happening!?"
            onChange={(event) => setText(event.target.value)}
            value={text}

            // //db
            // onChange={(event) => setText(event.target.value)}
            // value={text}
            // //db


            />


            <div className='flex justify-between pt-5 
            border-t border-gray-300
            '>
                <div className='flex space-x-1.5' >
                    <PhotoIcon className="w-[22px] h-[22px] text-[#F4AF01] " />
                    <ChartBarIcon className="w-[22px] h-[22px] text-[#F4AF01] " />
                    <FaceSmileIcon className="w-[22px] h-[22px] text-[#F4AF01] " />
                    <CalendarIcon className="w-[22px] h-[22px] text-[#F4AF01] " />
                    <MapPinIcon className="w-[22px] h-[22px] text-[#F4AF01] " />
                </div>
                <button
                className='bg-[#F4AF01] text-white w-[80px] h-[36px] rounded-full
                text-sm cursor-pointer disabled:bg-opacity-60  '

                disabled={!text}

//del comment below
                // onClick={() => insideModal ? sendComment() : sendPost()}
  
                
                // disabled={!text}
                onClick={() => sendPost()}
//del comment above

                >Bumble
                </button>
            </div>



        </div>
    </div>
    </>
  )
}
