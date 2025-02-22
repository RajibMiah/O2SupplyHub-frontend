import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOption } from '@redux/slices/selectionSlice';

export const useSelection = (questions) => {
   const [step, setStep] = useState(0);
   const [resultPage, setResultPage] = useState(false);
   const dispatch = useDispatch();
   const selectedOptions = useSelector((state) => state.selection.selectedOptions);

   const handleOptionSelect = (value) => {
      dispatch(selectOption({ step, value }));
   };

   const handleNavigation = (direction) => {
      if (direction === 1 && step === questions.length - 1) {
         setResultPage(true);
      } else {
         setStep((prev) => prev + direction);
      }
   };

   return {
      step,
      resultPage,
      selectedOptions,
      handleOptionSelect,
      handleNavigation,
      setResultPage,
   };
};
