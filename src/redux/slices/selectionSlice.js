import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   step: 0,
   resultPage: false,
   selectedOptions: {},
   quantity: 1,
   selectedOxygenGen: {
      model: '',
      productDescription: '',
      partNumber: '',
      priceMSRP: 0,
      leaseWeekly: 0,
      leaseMonthly: 0,
   },
};

const selected_values = [
   { name: 'Oxygen Exam/Comfort', qty: 1, flow_rate: 5, diversity_factor: 10 },
   { name: 'Oxygen (Surgery)', qty: 5, flow_rate: 5, diversity_factor: 50 },
   { name: 'Oxygen Cage (Specific)', qty: 2, flow_rate: 15, diversity_factor: 100 },
   { name: 'Jet Ventilator', qty: 1, flow_rate: 25, diversity_factor: 100 },
];

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

   console.table(results);
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
         state.selectedOptions = { ...state.selectedOptions, ...action.payload };
         const system_flow = calculateSystemFlow(selected_values);
         const part_number = getPartNumber(system_flow);
         const selectedGenerator = oxygenGenerators.find(
            (generator) => generator.partNumber === part_number
         );

         console.log('Selected Generator:', selectedGenerator);
         state.selectedOxygenGen = selectedGenerator;
      },
      incrementPriceByQty: (state) => {
         state.quantity += 1;
         state.selectedOxygenGen.priceMSRP *= state.quantity;
         state.selectedOxygenGen.leaseWeekly *= state.quantity;
         state.selectedOxygenGen.leaseMonthly *= state.quantity;
      },
      decrementPriceByQty: (state) => {
         if (state.quantity > 1) {
            state.quantity -= 1;
            state.selectedOxygenGen.priceMSRP /= state.quantity + 1;

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
