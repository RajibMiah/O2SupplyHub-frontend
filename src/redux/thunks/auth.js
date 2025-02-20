import {  createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API Base URL (from Vite environment variables)
const API_URL = import.meta.env.VITE_API_URL;

// Async function for user registration
export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || 'Registration failed');
    }
  }
);

// Async function for user login
export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/login`, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || 'Login failed');
    }
  }
);
