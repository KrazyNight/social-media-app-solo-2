"use client"
import { closeCommentModal } from '@/redux/slices/modalSlice';
import { AppDispatch, RootState } from '@/redux/store'
import { Modal } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostHeader } from '../Post';
import PostInput from '../PostInput';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function CommentModal() {
    const open = useSelector((state: RootState) => state.modals.commentModalOpen );
    const dispatch: AppDispatch = useDispatch();
    
    const commentDetails = useSelector((state: RootState) => state.modals.commentPostDetails )
  return (
    <>
    <Modal
    open={open}
    onClose={() => dispatch(closeCommentModal())}
    className='flex justify-center items-center '
    >
        <div className='w-full h-full  sm:w-[600px] sm:h-fit bg-white sm:rounded-xl outline-none relative '>
            <XMarkIcon
            className="w-7 mt-5 ml-5 cursor-pointer "
            onClick={() => dispatch(closeCommentModal())}
          />
            <div className='pt-5 pb-10 px-0 sm:px-5 flex flex-col  '>
                <PostHeader
                name={commentDetails.name}
                username={commentDetails.username}
                text={commentDetails.text}
                replyTo={commentDetails.username}

                />
                <div className='mt-5 '>
                <PostInput
                insideModal={true}
                />
                {/* PostInput is connected to posts, so now connected to "commentModal" */}

                </div>

                <div className='absolute w-0.5 h-32 bg-gray-300 
                left-[33px] sm:left-[53px] top-20 z-0
                '></div>
                

            </div>
        </div>
    </Modal>
      
    </>
  )
}











// //3rd attempt

// "use client"
// import { closeCommentModal } from '@/redux/slices/modalSlice';
// import { AppDispatch, RootState } from '@/redux/store';
// import { Modal } from '@mui/material';
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { PostHeader } from '../Post';
// import PostInput from '../PostInput';




 
// export default function CommentModal() {
//   const open = useSelector((state: RootState) => state.modals.commentModalOpen);
//   const dispatch: AppDispatch = useDispatch();
//   const commentDetails = useSelector((state: RootState) => state.modals.commentPostDetails)

//   return (
//     <>
//       <Modal
//       open={open}
//       onClose={() => dispatch(closeCommentModal())}
//       className='flex justify-center items-center   '
//       >
//         <div className='w-full h-full sm:w-[600px] sm:h-fit bg-white
//         sm:rounded-xl outline-none
//         '>
//           <div className='pt-5 pb-10 px-0 sm:px-5 flex flex-col '>
//             <PostHeader
//             name={commentDetails.name}           
//             username={commentDetails.username}
//             text={commentDetails.text}
//             replyTo={commentDetails.username}
//             />
//             <div className='mt-5'>
//               <PostInput
//               insideModal={true}
//               />
//             </div>
//           </div>
//         </div>

//       </Modal>
      
//     </>
//   );
// }








//2nd attempt
// //del comment
// "use client "
// //del comment


// import { closeCommentModal } from '@/redux/slices/modalSlice';
// import { AppDispatch, RootState } from '@/redux/store'
// import { Modal } from '@mui/material'
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { PostHeader } from '../Post';
// import PostInput from '../PostInput';
// import { XMarkIcon } from '@heroicons/react/24/outline';

// export default function CommentModal() {
//   const open = useSelector((state: RootState) => state.modals.commentModalOpen);
//   const commentDetails = useSelector((state: RootState) => state.modals.commentPostDetails )
//   const dispatch: AppDispatch = useDispatch();
//   return (
//     <>
//     <Modal
//     open={open}
//     // open={false} bc Modal are the first thing to popup in the scren z-score 1000
//     onClose={() => dispatch(closeCommentModal())}

//     className='flex justify-center items-center  '
//     >
//       <div className='w-full h-full sm:w-[600px] sm:h-fit bg-white
//       sm:rounded-xl outline-none 
//       relative
//       '>

//         <XMarkIcon
//             className="w-7 mt-5 ml-5 cursor-pointer "
//             onClick={() => dispatch(closeCommentModal())}
//           />

//         <div className='pt-5 pb-10 px-0 sm:px-5 flex flex-col  '>
//           <PostHeader
//           name={commentDetails.name}
//           username={commentDetails.username}
//           text={commentDetails.text}
//           replyTo={commentDetails.username}
          
//           />
//           <div className='mt-4 '>
//             <PostInput 
//             insideModal={true}
//             />
//           </div>
// {/* this is the line connecting the two profile-pic images below */}
//         <div className='absolute w-0.5 h-32 bg-gray-300 
//         left-[33px] sm:left-[53px] top-20 z-0
//         '></div>

//         </div>
//       </div>

//     </Modal>
      
//     </>
//   )
// }





// "use client";

// import { RootState } from "@/redux/store";
// import { Modal } from "@mui/material";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { closeCommentModal } from "@/redux/slices/modalSlice";
// import { PostHeader } from "../Post";
// import PostInput from "../PostInput";
// import { XMarkIcon } from "@heroicons/react/24/outline";

// export default function CommentModal() {
//   const open = useSelector((state: RootState) => state.modals.commentModalOpen);
  
//   const commentDetails = useSelector((state: RootState) => state.modals.commentPostDetails);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <Modal
//         open={open}
//         onClose={() => dispatch(closeCommentModal())}
//         className="flex justify-center items-center "
//       >
//         <div
//           className="w-full h-full sm:w-[600px] sm:h-fit bg-white 
//         sm:rounded-xl outline-none relative 
//         "
//         >
//           <XMarkIcon
//             className="w-7 mt-5 ml-5 cursor-pointer"
//             onClick={() => dispatch(closeCommentModal())}
//           />

//           <div className="pt-5 pb-10 px-0 sm:px-5 flex flex-col  ">
//             <PostHeader
//               name={commentDetails.name}
//               username={commentDetails.username}
//               text={commentDetails.text}
//               replyTo={commentDetails.username}
//             />

//             <div className="mt-4   ">

//               <PostInput insideModal={true} />
//               {/* insideModal is del, create interface boolean in PostInput.tsx */}
//             </div>

//             <div className="absolute w-0.5 h-32 bg-gray-300
//             left-[33px] sm:left-[53px] top-20 z-0 
            
//             "></div>



//           </div>
//         </div>
//       </Modal>
//     </>
//   );
// }

