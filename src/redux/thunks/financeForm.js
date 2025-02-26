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

         console.log('🔍 Response Status:', response.status);

         // Parse JSON response
         const data = await response.json();

         // If API sends { success: false }, handle rejection
         if (data.success === false) {
            return rejectWithValue(data.message || 'Submission failed');
         }

         return data;
      } catch (error) {
         console.error('❌ Error Submitting Finance Form:', error);
         return rejectWithValue(error.message || 'Something went wrong');
      }
   }
);
