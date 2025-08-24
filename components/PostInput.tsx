//db
"use client"
import { db } from '@/firebase';
import { RootState } from '@/redux/store';
//db
import { CalendarIcon, ChartBarIcon, FaceSmileIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function PostInput() {
//db
  const [text, setText] = useState(""); 
  const user = useSelector((state: RootState) => state.user)

  async function sendPost() {
    await addDoc(collection(db, "posts "), {
      //what do we want to have inside of the post: who wrote the most?(use Redux), text/comment,
      text: text,
      name: user.name,
      username: user.username,
      timestamp: serverTimestamp(),
      likes: [],
      comments: []  
    });
// after we have sent the post/comment to the db, we need the text in the input to disapear
    setText("");
    

  }
//db the "posts" comes from the website, db

  return (
    <>
    <div className='flex space-x-5 p-3 
    border-b border-gray-300
    '>
        <Image 
        src="/assets/busybee-logo2.png"
        width={44}
        height={44 }
        alt="Logo"
        className='w-11 h-11'
        />
        <div className='w-full bg-slate-50 '>
            <textarea className='resize-none w-full
            min-h-[50px] text-lg
            bg-slate-50
            '
            placeholder="What's happening!?"
            //db
            onChange={(event) => setText(event.target.value)}
            value={text}
            //db
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
                text-sm cursor-pointer disabled:bg-opacity-60
                '
                //db
                disabled={!text}
                onClick={() => sendPost()}
                //db
                >Bumble
                </button>
            </div>



        </div>
    </div>
    </>
  )
}
