import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   loginModal: false,
   signupModal: false,
   forgetPassModel: false,
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
      setForgetModel: (state, action) => {
         state.forgetPassModel = action.payload;
      },
   },
});

export const { setLoginModal, setSignupModal, setForgetModel } = uiSlice.actions;
export default uiSlice.reducer;
