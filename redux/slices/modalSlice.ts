import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    signInModalOpen: false,
    logInModalOpen: false, 
}

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
    }

  }
});

export const { openSignInModal, closeSignInModal, openLogInModal, closeLogInModal } = modalSlice.actions

export default modalSlice.reducer