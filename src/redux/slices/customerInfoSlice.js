import { createSlice } from '@reduxjs/toolkit';
import { submitCustomerInfo } from '@redux/thunks/customerInfo';
import { submitFinanceForm } from '@redux/thunks/financeForm';

const initialState = {
   data: {
      customer: {
         details: '',
         contractPerson: '',
         referenceNumber: '',
         preparedBy: '',
         location: '',
         contact: {
            title: '',
            name: '',
            phone: '',
            email: '',
         },
      },
      billing: {
         facilityName: '',
         streetAddress: '',
         city: '',
         state: '',
         zip: '',
         country: '',
         taxId: '',
         receivingType: '',
         receivingHours: '',
         differentShipping: false, // ✅ Toggle This
      },
      shipping: {
         facilityName: '',
         streetAddress: '',
         city: '',
         state: '',
         zip: '',
         country: '',
         taxId: '',
         receivingType: '',
         receivingHours: '',
      },
      instructions: {
         constructionSite: false,
         liftGate: false,
         insideDelivery: false,
         whiteGlove: false,
      },
   },
   loading: false,
   error: null,
};

const customerSlice = createSlice({
   name: 'customer',
   initialState,
   reducers: {
      updateCustomerInfo: (state, action) => {
         const updatedInfo = { ...state.data, ...action.payload };

         state.data = updatedInfo;
      },
      updateFinanceInfo: (state, action) => {
         const { field, value } = action.payload;
         state.finance[field] = value;
      },
      setCustomerContact: (state, action) => {
         state.data.customer.contact = action.payload;
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

export const { updateCustomerInfo, updateFinanceInfo, setCustomerContact } = customerSlice.actions;
export default customerSlice.reducer;
