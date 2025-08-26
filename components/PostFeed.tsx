"use client"
//maybe delete above

import React, { useEffect, useState } from 'react'
import PostInput from './PostInput'
import Post from './Post'
import { collection, DocumentData, onSnapshot, orderBy, query, QueryDocumentSnapshot } from 'firebase/firestore'
import { db } from '@/firebase'
//import { collection, DocumentData, onSnapshot, orderBy, query, QueryDocumentSnapshot } from 'firebase/firestore'
//import { db } from '@/firebase'

export default function PostFeed() {


// //db
// const [posts, setPosts] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>[]>([])

// useEffect(() => {
//   const q = query(collection(db, "posts"), orderBy("timestamp", "desc"))

//   const unsubscribe = onSnapshot(q, (snapshot) => {
//     const snapshotDocs = snapshot.docs

//     setPosts(snapshotDocs)
    
//   })
//   return unsubscribe

// }, [])



//db

  const [posts, setPosts] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>[]>([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const snapshotDocs = snapshot.docs

      setPosts(snapshotDocs)
    })

    return unsubscribe
  }, [])

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

    {posts.map(post => <Post 
    key={post.id}
    data={post.data()}
    //del comment
    id={post.id}
    //del commen

    />)}


    {/* 
    
    {posts.map(post => <Post
      key={post.id}
      data={post.data()}


    />)} 
    */}

    {/* //db : afterward make you Post.tsx dynamic */}
    {/* delete bottom */}
    {/* <Post /> */}
    </div>
    </>
  )
}


  