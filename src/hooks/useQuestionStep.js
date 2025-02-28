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
const MAX_FLOW_RATE = 40;

const JET_VENTILATOR = 'Do you use ventilator?';

const useQuestionLogic = (questions) => {
   const dispatch = useDispatch();
   const { step, isVentilatorSelected, selectedOptions } = useSelector((state) => state.selection);

   const [dummyQuestions, setDummyQuestions] = useState([...questions]);
   const [direction, setDirection] = useState(1);
   const currentQuestion = dummyQuestions[step];

   const isJetVentilator = currentQuestion?.question === JET_VENTILATOR;
   const [isJetVentilatorSelected, setIsJetVentilatorSelected] = useState(isVentilatorSelected);

   const [value, setValue] = useState(
      isJetVentilator && isJetVentilatorSelected
         ? selectedOptions[currentQuestion?.id]?.flow_rate ??
              currentQuestion?.flow_rate ??
              MIN_FLOW_RATE
         : selectedOptions[currentQuestion?.id]?.qty ?? currentQuestion?.qty ?? MIN_QTY
   );

   useEffect(() => {
      setIsJetVentilatorSelected(isVentilatorSelected);
   }, [isVentilatorSelected]);

   // useEffect(() => {
   //    if (isJetVentilator && isJetVentilatorSelected) {
   //       console.log('1====');
   //       setValue(
   //          selectedOptions[currentQuestion?.id]?.flow_rate ??
   //             currentQuestion?.flow_rate ??
   //             MIN_FLOW_RATE
   //       );
   //    } else if (isJetVentilator) {
   //       console.log('else if - 2');
   //       setValue(currentQuestion?.flow_rate);
   //    } else {
   //       console.log('else 3');
   //       setValue(selectedOptions[currentQuestion?.id]?.qty ?? currentQuestion?.qty ?? MIN_QTY);
   //    }
   // }, [
   //    step,
   //    selectedOptions,
   //    dummyQuestions,
   //    currentQuestion?.flow_rate,
   //    currentQuestion?.id,
   //    currentQuestion?.qty,
   //    isJetVentilator,
   //    isJetVentilatorSelected,
   //    isVentilatorSelected,
   // ]);

   const updateDummyQuestions = (id, updatedData) => {
      setDummyQuestions((prev) =>
         prev.map((question) => (question.id === id ? { ...question, ...updatedData } : question))
      );

      // dispatch(
      //    setSelectedOptions({
      //       [id]: {
      //          ...selectedOptions[id],
      //          ...updatedData,
      //       },
      //    })
      // );
   };

   const handleChange = (e) => {
      const newValue = parseInt(e.target.value, 10);
      setValue(newValue);

      const updatedData =
         isJetVentilator && isVentilatorSelected
            ? { ...questions[3], flow_rate: newValue }
            : { qty: newValue };
      console.log('question', currentQuestion);

      console.log('update data', updatedData);
      console.log('cureent ventilator ', isJetVentilator, ': ', isVentilatorSelected);
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
      console.log('is selected', isSelected);
      dispatch(setJetVentilatorUpdate(isSelected));

      // // Define the Jet Ventilator question object
      // const JET_VENTILATOR = {
      //    id: 3,
      //    question: 'Do you use ventilator?',
      //    qty: 1,
      //    flow_rate: 25,
      //    diversity_factor: 100,
      // };
      // setDummyQuestions((prevQuestions) => {
      //    return isSelected
      //       ? [...prevQuestions.filter((q) => q.id !== JET_VENTILATOR.id), JET_VENTILATOR] // Add if not exists
      //       : prevQuestions.filter((q) => q.id !== JET_VENTILATOR.id); // Remove if exists
      // });
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

      // Remove Jet Ventilator question if isJetVentilatorSelected is false
      console.log('is jet ventilator selected', isVentilatorSelected);
      if (!isVentilatorSelected) {
         finalData = finalData.filter((question) => question.id !== 3); // Assuming 3 is JET_VENTILATOR ID
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
