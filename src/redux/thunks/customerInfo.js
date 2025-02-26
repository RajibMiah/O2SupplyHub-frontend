import { createAsyncThunk } from '@reduxjs/toolkit';

const url = import.meta.env.VITE_API_URL;

export const submitCustomerInfo = createAsyncThunk(
   'customer/submitCustomerInfo',
   async (customerData, { rejectWithValue }) => {
      try {
         console.log('backend url', url);
         const response = await fetch(`${url}/customer/info`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(customerData),
         });

         // Check if HTTP response status is OK
         if (!response.ok) {
            throw new Error('Failed to submit customer information');
         }

         const data = await response.json(); // ✅ Parse once

         // If API returns { success: false }, consider it an error
         if (data.success === false) {
            throw new Error(data.message || 'Submission failed');
         }

         // Store token if present
         if (data.token) {
            localStorage.setItem('authToken', data.token);
         }

         return data; // ✅ Return the parsed response correctly
      } catch (error) {
         console.error('Submit Customer Error:', error);
         return rejectWithValue(error.message);
      }
   }
);
