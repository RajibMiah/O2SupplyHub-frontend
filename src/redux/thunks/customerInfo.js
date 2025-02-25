import { createAsyncThunk } from '@reduxjs/toolkit';

const url = import.meta.env.VITE_API_URL;

export const submitCustomerInfo = createAsyncThunk(
   'customer/submitCustomerInfo',
   async (customerData, { rejectWithValue }) => {
      try {
         const response = await fetch(`${url}/customer/info`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(customerData),
         });

         if (!response.ok) {
            throw new Error('Failed to submit customer information');
         }

         return await response.json();
      } catch (error) {
         return rejectWithValue(error.message);
      }
   }
);
