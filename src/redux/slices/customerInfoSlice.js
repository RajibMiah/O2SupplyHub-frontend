import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   customer: {
      details: '',
      contractPerson: '',
      referenceNumber: '',
      preparedBy: '',
      location: '',
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
      differentShipping: false,
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
      constructionSite: '',
      liftGate: '',
      insideDelivery: '',
      whiteGlove: '',
   },
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
   },
});

export const { updateCustomerInfo } = customerSlice.actions;
export default customerSlice.reducer;
