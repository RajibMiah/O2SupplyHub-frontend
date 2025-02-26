import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser } from '@redux/thunks/auth';

// Authentication slice
const authSlice = createSlice({
   name: 'auth',
   initialState: {
      user: null,
      token: localStorage.getItem('authToken') || null, // Load token from localStorage
      isAuthenticated: !!localStorage.getItem('authToken'),
      loading: false,
      error: null,
   },
   reducers: {
      logout: (state) => {
         localStorage.removeItem('authToken'); // Remove token on logout
         state.user = null;
         state.token = null;
         state.error = null;
         state.isAuthenticated = false;
      },

      setAuthentication: (state, action) => {
         state.user = action.payload.user;
         state.token = action.payload.token;
         state.isAuthenticated = !!action.payload.token;
      },
   },
   extraReducers: (builder) => {
      builder
         // 🔹 Register
         .addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = !!action.payload.token;
            localStorage.setItem('authToken', action.payload.token); // Save token
         })
         .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // 🔹 Login
         .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = !!action.payload.token;
            localStorage.setItem('authToken', action.payload.token); // Save token
         })
         .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         });
   },
});

export const { logout, setAuthentication } = authSlice.actions;
export default authSlice.reducer;
