import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {
   setStep,
   setSelectedOptions,
   setResultPage,
   setJetVentilatorUpdate,
} from '@redux/slices/selectionSlice';

const MIN_QTY = 0;
const MAX_QTY = 10;
const MIN_FLOW_RATE = 1;
const MAX_FLOW_RATE = 60;

const JET_VENTILATOR = 'Do you use ventilator?';

const useQuestionLogic = (questions) => {
   const dispatch = useDispatch();
   const { step, isVentilatorSelected, selectedOptions } = useSelector((state) => state.selection);

   const [dummyQuestions, setDummyQuestions] = useState([...questions]);
   const [direction, setDirection] = useState(1);
   const currentQuestion = dummyQuestions[step];

   const isJetVentilator = currentQuestion?.question === JET_VENTILATOR;
   const [isJetVentilatorSelected, setIsJetVentilatorSelected] = useState(isVentilatorSelected);

   // Helper function to get the initial value for the question.
   const getInitialValue = () => {
      if (isJetVentilator) {
         if (isJetVentilatorSelected) {
            return (
               selectedOptions[currentQuestion?.id]?.flow_rate ??
               currentQuestion?.flow_rate ??
               MIN_FLOW_RATE
            );
         }
         return currentQuestion?.flow_rate ?? MIN_FLOW_RATE;
      }
      return selectedOptions[currentQuestion?.id]?.qty ?? currentQuestion?.qty ?? MIN_QTY;
   };

   const [value, setValue] = useState(getInitialValue());

   // Sync local ventilator selection with Redux
   useEffect(() => {
      setIsJetVentilatorSelected(isVentilatorSelected);
   }, [isVentilatorSelected]);

   // Update the value when navigating between questions or when selectedOptions change.
   useEffect(() => {
      setValue(getInitialValue());
   }, [
      step,
      selectedOptions,
      currentQuestion?.id,
      currentQuestion?.flow_rate,
      currentQuestion?.qty,
      isJetVentilator,
      isJetVentilatorSelected,
   ]);

   // Update dummyQuestions and Redux store simultaneously.
   const updateDummyQuestions = (id, updatedData) => {
      setDummyQuestions((prev) =>
         prev.map((question) => (question.id === id ? { ...question, ...updatedData } : question))
      );

      dispatch(
         setSelectedOptions({
            ...selectedOptions,
            [id]: {
               ...(selectedOptions[id] || {}),
               ...updatedData,
            },
         })
      );
   };

   const handleChange = (e) => {
      const newValue = parseInt(e.target.value, 10);
      setValue(newValue);

      const updatedData =
         isJetVentilator && isVentilatorSelected ? { flow_rate: newValue } : { qty: newValue };

      updateDummyQuestions(currentQuestion.id, updatedData);
   };

   const handleIncrement = () => {
      setValue((prevValue) => {
         const newValue =
            isJetVentilator && isVentilatorSelected
               ? Math.min(prevValue + 1, MAX_FLOW_RATE)
               : Math.min(prevValue + 1, MAX_QTY);

         updateDummyQuestions(
            currentQuestion.id,
            isJetVentilator && isVentilatorSelected ? { flow_rate: newValue } : { qty: newValue }
         );
         return newValue;
      });
   };

   const handleDecrement = () => {
      setValue((prevValue) => {
         const newValue =
            isJetVentilator && isVentilatorSelected
               ? Math.max(prevValue - 1, MIN_FLOW_RATE)
               : Math.max(prevValue - 1, MIN_QTY);

         updateDummyQuestions(
            currentQuestion.id,
            isJetVentilator && isVentilatorSelected ? { flow_rate: newValue } : { qty: newValue }
         );
         return newValue;
      });
   };

   const handleJetVentilatorSelection = (option) => {
      const isSelected = option === 'Yes';
      dispatch(setJetVentilatorUpdate(isSelected));
      // If needed, you can also update the current question immediately here.
   };

   const handleNavigation = (newStep) => {
      dispatch(setStep(newStep));
      setDirection(newStep > step ? 1 : -1);
   };

   const handleSubmit = () => {
      let finalData = dummyQuestions.map((question) => {
         const selected = selectedOptions[question.id] || {};
         return {
            id: question.id,
            question: question.question,
            qty: selected.qty ?? question.qty,
            flow_rate: question.flow_rate,
            diversity_factor: question.diversity_factor,
         };
      });

      // Remove the ventilator question if it was not selected
      if (!isVentilatorSelected) {
         finalData = finalData.filter((question) => question.id !== 3);
      }

      dispatch(setSelectedOptions(finalData));
      dispatch(setResultPage(true));
   };

   return {
      step,
      direction,
      currentQuestion,
      value,
      isJetVentilator,
      isVentilatorSelected,
      handleChange,
      handleIncrement,
      handleDecrement,
      handleJetVentilatorSelection,
      handleNavigation,
      handleSubmit,
   };
};

export default useQuestionLogic;
