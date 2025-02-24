import { createSlice } from '@reduxjs/toolkit';
import { submitCustomerInfo } from '@redux/thunks/customerInfo';
import { submitFinanceForm } from '@redux/thunks/financeForm';

const initialState = {
   data: null,
   loading: false,
   error: null,
};

const customerSlice = createSlice({
   name: 'customer',
   initialState,
   reducers: {
      updateCustomerInfo: (state, action) => {
         const { field, value } = action.payload;

         const keys = field.split('.'); // Example: 'billing.city'
         let current = state;

         for (let i = 0; i < keys.length - 1; i++) {
            current = current[keys[i]]; // Navigate through the state
         }

         current[keys[keys.length - 1]] = value; // Update the final key
      },
      updateFinanceInfo: (state, action) => {
         const { field, value } = action.payload;
         state.finance[field] = value;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(submitCustomerInfo.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(submitCustomerInfo.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(submitCustomerInfo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         .addCase(submitFinanceForm.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(submitFinanceForm.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
         })
         .addCase(submitFinanceForm.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         });
   },
});

export const { updateCustomerInfo, updateFinanceInfo } = customerSlice.actions;
export default customerSlice.reducer;
