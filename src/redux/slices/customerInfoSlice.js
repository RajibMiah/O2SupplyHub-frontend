import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   customer: '',
   contractPerson: '',
   referenceNumber: '',
   preparedBy: '',
   facilityName: '',
   streetAddress: '',
   city: '',
   state: '',
   zip: '',
   differentShipping: false,
   shippingFacilityName: '',
   shippingStreetAddress: '',
   shippingCity: '',
   constructionSite: 'no',
   liftGate: 'no',
};

const formSlice = createSlice({
   name: 'form',
   initialState,
   reducers: {
      updateForm: (state, action) => {
         return { ...state, ...action.payload };
      },
      toggleShippingAddress: (state) => {
         state.differentShipping = !state.differentShipping;
      },
   },
});

export const { updateForm, toggleShippingAddress } = formSlice.actions;
export default formSlice.reducer;
