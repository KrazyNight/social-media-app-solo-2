import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signInModalOpen: false,
  logInModalOpen: false,
  commentModalOpen: false,
  commentPostDetails: {
    name: "",
    username: "",
    id: "",
    text: "",

  }
  






  //del comment

  // commentModalOpen: false,
  // commentPostDetails: {
  //     name: "",
  //     username: "",
  //     id: "",
  //     text: "",
  // }
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignInModal: (state) => {
      state.signInModalOpen = true;
    },
    closeSignInModal: (state) => {
      state.signInModalOpen = false;
    },
    openLogInModal: (state) => {
      state.logInModalOpen = true;
    },
    closeLogInModal: (state) => {
      state.logInModalOpen = false;
    },



    openCommentModal: (state) => {
      state.commentModalOpen = true;
    },
    closeCommentModal: (state) => {
      state.commentModalOpen = false;
    },
    setCommentDetails: (state, action) => {
      state.commentPostDetails.name = action.payload.name
      state.commentPostDetails.username = action.payload.username
      state.commentPostDetails.id = action.payload.id
      state.commentPostDetails.text = action.payload.text
    }

//del comment
//del comment

    // openCommentModal: (state) => {
    //     state.commentModalOpen = true;
    // },
    // closeCommentModal: (state) => {
    //     state.commentModalOpen = false;
    // },
    // setCommentDetails: (state, action) => {
    //     state.commentPostDetails.name = action.payload.name
    //     state.commentPostDetails.username = action.payload.username
    //     state.commentPostDetails.id = action.payload.id
    //     state.commentPostDetails.text = action.payload.text
    // }
  },
});

export const {
  openSignInModal,
  closeSignInModal,
  openLogInModal,
  closeLogInModal,
  
  openCommentModal,
  closeCommentModal,
  setCommentDetails
  

//del comment
  // openCommentModal,
  // closeCommentModal,
  // setCommentDetails,
//del comment


} = modalSlice.actions;

export default modalSlice.reducer;
