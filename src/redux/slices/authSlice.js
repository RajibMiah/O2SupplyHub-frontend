import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser } from '@redux/thunks/auth';

// Authentication slice
const authSlice = createSlice({
   name: 'auth',
   initialState: {
      user: null,
      token: null,
      isAuthenticated: false,
      loading: false,
      error: null,
   },
   reducers: {
      logout: (state) => {
         state.user = null;
         state.token = null;
         state.error = null;
         state.isAuthenticated = false;
      },
      login(state) {
         state.isAuthenticated = true;
      },
      setRegistertion(state, action) {
         state.user = action.payload.user ?? null;
         state.token = action.payload.token;
         state.isAuthenticated = state.token ? true : false;
      },
   },
   extraReducers: (builder) => {
      builder
         // Register
         .addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = state.token ? true : false;
         })
         .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // Login
         .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = state.token ? true : false;
         })
         .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         });
   },
});

export const { logout, login, setRegistertion } = authSlice.actions;
export default authSlice.reducer;
