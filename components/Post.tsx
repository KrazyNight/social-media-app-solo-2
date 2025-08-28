import { openCommentModal, setCommentDetails,  } from "@/redux/slices/modalSlice";
import { AppDispatch, RootState } from "@/redux/store";
import {
  ArrowUpTrayIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { DocumentData, Timestamp } from "firebase/firestore";
import Image from "next/image";
import React from "react";
//
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";

//db
//
// interface PostProps {
//   data: DocumentData
// }

//db
//bf:

interface PostProps {
  data: DocumentData;
  id: string

//del comment below
  //id: string;

}

export default function Post({ data, id }: PostProps) {
  //export default function Post({ data, id }: PostProps) {
//del comment
  // const dispatch: AppDispatch = useDispatch();
// del comment

  const dispatch: AppDispatch = useDispatch();



  return (
    <>
      <div className="border-b border-gray-300  ">
        {/* bf: <PostHeader /> */}
        <PostHeader
          username={data.username}
          name={data.name}
          timestamp={data.timestamp}
          text={data.text}
        />

        {/* 
        <PostHeader
        username={data.username}
        name={data.name}
        timestamp={data.timestamp}
        text={data.text}
        /> 
*/}

        {/* db: bf  */}
        <div className="ml-16 p-3 flex space-x-14 ">
          <div className="relative">
            <ChatBubbleOvalLeftEllipsisIcon
              className="w-[22px] h-[22px] cursor-pointer
                hover:text-[#F4AF01] transition "
                


                onClick={() => {
                  dispatch(setCommentDetails({
                    name: data.name,
                    username: data.username,


                    id: id,


                    text: data.text,
                  }))
                  dispatch(openCommentModal())
                }}

             
                
                //onClick={() => dispatch(openCommentModal())}
                // now that we opened the commentModal, we need
                //...to connect to the new information inside the modal

//del comment
              

              // onClick={() => {

              //   dispatch(setCommentDetails({
              //     name: data.name,
              //     username: data.username,
              //     //del comment, go to PostFeet.tsx, add id={post.id}
              //     id: id,
              //     text: data.text,
              //   }))
              //   dispatch(openCommentModal())
              // }}

//del comment
            />
            <span className="absolute text-xs top-1 -right-3 ">2</span>
          </div>

          <div className="relative">
            <HeartIcon
              className="w-[22px] h-[22px] cursor-pointer
                hover:text-[#F4AF01] transition "
            />
            <span className="absolute text-xs top-1 -right-3 ">2</span>
          </div>

          <div className="relative">
            <ChartBarIcon
              className="w-[22px] h-[22px] cursor-not-allowed
                hover:text-[red] transition  
                "
            />
          </div>

          <div className="relative">
            <ArrowUpTrayIcon
              className="w-[22px] h-[22px] cursor-not-allowed
                hover:text-[red] transition  
                "
            />
          </div>
        </div>
      </div>
    </>
  );
}

//before:
//export function PostHeader() {

// //db
// interface PostHeaderProps {
//   username: string,
//   name: string,
//   timestamp: Timestamp,
//   text: string
// }
// //db

interface PostHeaderProps {
  name: string;
  username: string;
  timestamp?: Timestamp;
  text: string;
  replyTo?: string;
  
// del comment below
  // replyTo?: string;
//del comment above

}

export function PostHeader({
  name,
  username,
  timestamp,
  text,
  replyTo,


// del comment below
  // replyTo,
// del comment below

}: PostHeaderProps) {
  //export function PostHeader({ username, name, timestamp, text }: PostHeaderProps) {
  return (
    <>
      <div className="flex p-3 space-x-5 ">
        <Image
          src="/assets/profile-pic.png"
          width={44}
          height={44}
          alt="Profile-Pic" 

          className="w-11 h-11 z-10 bg-white" 
//del comment z-score
        />

        <div className="text-[15px] flex flex-col space-y-2 ">
          <div className="flex space-x-2 text-[#707E89] ">
            <span
              className="font-bold text-black
            inline-block whitespace-nowrap overflow-hidden text-ellipsis 
            max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px]
            sm:max-w-[160p]
            "
            >
              {/* db */}

              {name}
              {/* Name Guest */}

              {/* db */}
            </span>
            <span
              className="
            inline-block whitespace-nowrap overflow-hidden text-ellipsis 
            max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px]
            sm:max-w-[160p]
            "
            >
              {/* db */}@{username}
              {/* @username Guest */}
              {/* db */}
            </span>
            {/* bf: <span>{timestamp}</span> */}

            {/* <span> · </span> */}

            {timestamp && (
              <>
                <span> · </span>
                <Moment fromNow>{timestamp.toDate()}</Moment>
              </>
            )}

            {/* db */}
            {/* <span>a day ago </span> */}
{/* 
            {
              timestamp &&
            <Moment fromNow>

            {timestamp.toDate()}
            </Moment>
            } 
*/}

            {/* db */}
          </div>

          <span>{text}</span>

          {replyTo && (
            <>
          <span className="text-[15px] text-[#707E89]  "  >
            Replying to <span className="text-[#F4AF01]  ">@username101</span>
          </span>
            
            </>
          )}

         




         


          {/* del below */}
          
          





          {/* {replyTo && (
            <>
              <span className="text-[15px] text-[#707E89] ">
                Replying to <span className="text-[#F4AF01]  ">@{replyTo}</span>
              </span>
            </>
          )} */}

          {/* del above */}
        </div>
      </div>
    </>
  );
}
