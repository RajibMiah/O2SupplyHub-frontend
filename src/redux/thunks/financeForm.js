import { createAsyncThunk } from '@reduxjs/toolkit';

export const submitFinanceForm = createAsyncThunk(
   'finance/submitFinanceForm',
   async (financeData, { rejectWithValue }) => {
      try {
         const response = await fetch('https://your-api-endpoint.com/finance', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
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
