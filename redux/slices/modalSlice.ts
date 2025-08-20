import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    signInModalOpen: false,
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
    }
  }
});

export const { openSignInModal, closeSignInModal } = modalSlice.actions

export default modalSlice.reducer