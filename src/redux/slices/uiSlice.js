import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   loginModal: false,
   signupModal: false,
};

const uiSlice = createSlice({
   name: 'ui',
   initialState,
   reducers: {
      setLoginModal: (state, action) => {
         state.loginModal = action.payload;
      },
      setSignupModal: (state, action) => {
         state.signupModal = action.payload;
      },
   },
});

export const { setLoginModal, setSignupModal } = uiSlice.actions;
export default uiSlice.reducer;
