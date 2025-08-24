import React from 'react'
import PostInput from './PostInput'
import Post from './Post'

export default function PostFeed() {
//db


//db

  return (
    <>
    <div className='flex-grow 
    max-w-2xl
    border-x
    border-gray-300
    '>
        <div className='py-4 px-3 text-lg sm:text-xl sticky top-0
        z-50 bg-white bg-opacity-80 backdrop-blur-sm font-bold 
        border-b border-gray-300
        '>
            Home
        </div>
    <PostInput /> 
    <Post />
    </div>
    </>
  )
}


  