import { createAsyncThunk } from '@reduxjs/toolkit';

const url = import.meta.env.VITE_API_URL;

export const submitFinanceForm = createAsyncThunk(
   'finance/submitFinanceForm',
   async (financeData, { rejectWithValue }) => {
      try {
         // Retrieve token from localStorage
         const token = localStorage.getItem('authToken');

         const response = await fetch(`${url}/customer/finance-form`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${token}`, // Attach token here
            },
            body: JSON.stringify(financeData),
         });

         if (!response.ok) {
            throw new Error('Failed to submit finance form');
         }

         return await response.json();
      } catch (error) {
         return rejectWithValue(error.message);
      }
   }
);
