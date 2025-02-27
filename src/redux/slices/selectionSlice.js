import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   step: 0,
   resultPage: false,
   selectedOptions: [],
   quantity: 1,
   isVentilatorSelected: false,
   selectedOxygenGen: {
      model: '',
      productDescription: '',
      partNumber: '',
      totalPrice: 0,
      priceMSRP: 0,
      leaseWeekly: 0,
      leaseMonthly: 0,
   },
};

const oxygenGenerators = [
   {
      model: 'Aura® 10 Nano',
      productDescription: '10LPM @ 50psi, 8 Gallon Storage tank, Oxygen (O2): 93% ± 3%',
      partNumber: 'RA2801OC1V6506',
      priceMSRP: 7428.75,
      leaseWeekly: 34.29,
      leaseMonthly: 156.77,
   },
   {
      model: 'Aura® 10',
      productDescription: '10LPM @ 50psi, 30 Gallon integrated Storage tank, Oxygen (O2): 93% ± 3%',
      partNumber: 'RA2801OC4V6278',
      priceMSRP: 22577.42,
      leaseWeekly: 104.2,
      leaseMonthly: 462.72,
   },
   {
      model: 'Aura® 20',
      productDescription: '20LPM @ 50psi, 30 Gallon integrated Storage tank, Oxygen (O2): 93% ± 3%',
      partNumber: 'RA2801OC4V6200',
      priceMSRP: 25273.07,
      leaseWeekly: 116.64,
      leaseMonthly: 518.01,
   },
   {
      model: 'Aura® 40',
      productDescription: '40LPM @ 50psi, 30 Gallon integrated Storage tank, Oxygen (O2): 93% ± 3%',
      partNumber: 'RA2801OC8V6458',
      priceMSRP: 42347.99,
      leaseWeekly: 195.45,
      leaseMonthly: 868.0,
   },
   {
      model: 'Aura® 80',
      productDescription: '80LPM @ 50psi, 80 Gallon Storage tank, Oxygen (O2): 93% ± 3%',
      partNumber: 'RA2801OC8V6430',
      priceMSRP: 57335.36,
      leaseWeekly: 264.62,
      leaseMonthly: 1159.05,
   },
];

const getPartNumber = (systemFlow) => {
   if (systemFlow <= 10) {
      return 'RA2801OC1V6506'; // Aura® 10 Nano
   } else if (systemFlow <= 20) {
      return 'RA2801OC4V6278'; // Aura® 10
   } else if (systemFlow <= 40) {
      return 'RA2801OC4V6200'; // Aura® 20
   } else {
      return 'RA2801OC8V6430'; // Aura® 80
   }
};

const calculateSystemFlow = (selected_values) => {
   let totalSystemFlow = 0;
   let results = [];

   selected_values.forEach((item) => {
      let systemFlow = item.qty * item.flow_rate * (item.diversity_factor / 100);
      results.push({ Outlet: item.name, 'System Flow (lpm)': systemFlow });
      totalSystemFlow += systemFlow;
   });
   console.log('Total System Flow (lpm):', totalSystemFlow);

   return totalSystemFlow;
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
         const updatedOptions = action.payload;
         state.selectedOptions = updatedOptions;

         const system_flow = calculateSystemFlow(Object.values(updatedOptions)); // Pass array

         const part_number = getPartNumber(system_flow);
         const selectedGenerator = oxygenGenerators.find(
            (generator) => generator.partNumber === part_number
         );

         state.selectedOxygenGen = {
            totalPrice: selectedGenerator.priceMSRP,
            ...selectedGenerator,
         };
      },

      setJetVentilatorUpdate: (state, action) => {
         state.isVentilatorSelected = action.payload;
      },

      incrementPriceByQty: (state) => {
         state.quantity += 1;
         state.selectedOxygenGen.totalPrice *= state.quantity;
         state.selectedOxygenGen.leaseWeekly *= state.quantity;
         state.selectedOxygenGen.leaseMonthly *= state.quantity;
      },
      decrementPriceByQty: (state) => {
         if (state.quantity > 1) {
            state.quantity -= 1;
            state.selectedOxygenGen.totalPrice /= state.quantity + 1;

            state.selectedOxygenGen.leaseWeekly /= state.quantity + 1;

            state.selectedOxygenGen.leaseMonthly /= state.quantity + 1;
         }
      },
   },
});

// ✅ Export Redux Actions
export const {
   setStep,
   setResultPage,
   setSelectedOptions,
   setJetVentilatorUpdate,
   incrementPriceByQty,
   decrementPriceByQty,
} = selectionSlice.actions;

// // ✅ Export Selectors
// export const selectQuantity = (state) => state.selection.quantity;
// export const selectSelectedOptions = (state) => state.selection.selectedOptions;
// export const selectRecommendedOC = (state) => state.selection.recommendedOC;
// export const selectTotalRetailPrice = (state) => state.selection.totalRetailPrice;
// export const selectTotalLeasePrice = (state) => state.selection.totalLeasePrice;

// ✅ Export Reducer
export default selectionSlice.reducer;
