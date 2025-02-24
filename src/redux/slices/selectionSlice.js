import { createSlice } from '@reduxjs/toolkit';

// Base pricing
const BASE_RETAIL_PRICE = 7428.75; // Retail price per OC
const LEASE_MONTHLY_PRICE = 158.77; // Monthly lease per OC

const initialState = {
   step: 0,
   resultPage: false,
   selectedOptions: {},
   quantity: 1, // Default quantity (number of OCs)
   totalRetailPrice: BASE_RETAIL_PRICE,
   totalLeasePrice: LEASE_MONTHLY_PRICE,
   recommendedOC: 1, // Default recommended Oxygen Concentrator count
};

// Function to calculate recommended OC based on user selections
const calculateRecommendedOC = (selectedOptions) => {
   let recommendedOC = 0;

   // **Anesthesia Machine Usage**
   if (selectedOptions[0] === 'A.1-2') recommendedOC += 1;
   if (selectedOptions[0] === 'B. 5-10') recommendedOC += 2;
   if (selectedOptions[0] === 'C. 10-20') recommendedOC += 3;

   // **Oxygen Cage Usage**
   if (selectedOptions[1] === 'A. 1-5') recommendedOC += 1;
   if (selectedOptions[1] === 'B. 5-10') recommendedOC += 2;
   if (selectedOptions[1] === 'C. 10-15') recommendedOC += 3;

   // **Ventilator Usage**
   if (selectedOptions[3] === 'A. Yes') recommendedOC += 1;

   // **Flow Rate Adjustment**
   if (selectedOptions[4] === 'A. 1-5 LPM') recommendedOC += 0;
   if (selectedOptions[4] === 'B. 5-10 LPM') recommendedOC += 1;
   if (selectedOptions[4] === 'C. 10-40 LPM') recommendedOC += 2;
   if (selectedOptions[4] === 'D. 40+ LPM') recommendedOC += 3;

   return Math.max(1, recommendedOC); // Ensure at least 1 OC
};

const selectionSlice = createSlice({
   name: 'selection',
   initialState,
   reducers: {
      setStep: (state, action) => {
         state.step = action.payload;
      },
      setResultPage: (state, action) => {
         state.resultPage = action.payload;
      },
      setSelectedOptions: (state, action) => {
         state.selectedOptions = { ...state.selectedOptions, ...action.payload };
         state.recommendedOC = calculateRecommendedOC(state.selectedOptions);
         state.totalRetailPrice = state.recommendedOC * BASE_RETAIL_PRICE;
         state.totalLeasePrice = state.recommendedOC * LEASE_MONTHLY_PRICE;
      },
      setQuantity: (state, action) => {
         const newQuantity = Math.max(1, action.payload); // Ensure at least 1
         state.quantity = newQuantity;
         state.totalRetailPrice = newQuantity * BASE_RETAIL_PRICE;
         state.totalLeasePrice = newQuantity * LEASE_MONTHLY_PRICE;
      },
   },
});

// ✅ Export Redux Actions
export const { setStep, setResultPage, setSelectedOptions, setQuantity } = selectionSlice.actions;

// ✅ Export Selectors
export const selectQuantity = (state) => state.selection.quantity;
export const selectSelectedOptions = (state) => state.selection.selectedOptions;
export const selectRecommendedOC = (state) => state.selection.recommendedOC;
export const selectTotalRetailPrice = (state) => state.selection.totalRetailPrice;
export const selectTotalLeasePrice = (state) => state.selection.totalLeasePrice;

// ✅ Export Reducer
export default selectionSlice.reducer;
