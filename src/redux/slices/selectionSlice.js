import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   step: 0,
   resultPage: false,
   selectedOptions: {},
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
      },
   },
});

// ✅ Export Redux Actions
export const { setStep, setResultPage, setSelectedOptions } = selectionSlice.actions;

// ✅ Export Selector Function for selectedOptions
export const selectSelectedOptions = (state) => state.selection.selectedOptions;

// ✅ Export Reducer
export default selectionSlice.reducer;
