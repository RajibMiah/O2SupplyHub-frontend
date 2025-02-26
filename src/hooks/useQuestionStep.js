import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { setStep, setSelectedOptions, setResultPage } from '@redux/slices/selectionSlice';

const MIN_QTY = 0;
const MAX_QTY = 10;
const MIN_FLOW_RATE = 1;
const MAX_FLOW_RATE = 40;

const JET_VENTILATOR = 'Do you use ventilator?';

const useQuestionLogic = (questions) => {
   const dispatch = useDispatch();
   const { step, selectedOptions } = useSelector((state) => state.selection);

   const [dummyQuestions, setDummyQuestions] = useState([...questions]);
   const [direction, setDirection] = useState(1);
   const currentQuestion = dummyQuestions[step];

   const isJetVentilator = currentQuestion?.question === JET_VENTILATOR;
   const isJetVentilatorSelected = selectedOptions[currentQuestion?.id]?.jetVentilator === 'Yes';

   const [value, setValue] = useState(
      isJetVentilator && isJetVentilatorSelected
         ? selectedOptions[currentQuestion?.id]?.flow_rate ??
              currentQuestion?.flow_rate ??
              MIN_FLOW_RATE
         : selectedOptions[currentQuestion?.id]?.qty ?? currentQuestion?.qty ?? MIN_QTY
   );

   useEffect(() => {
      if (isJetVentilator && isJetVentilatorSelected) {
         setValue(
            selectedOptions[currentQuestion?.id]?.flow_rate ??
               currentQuestion?.flow_rate ??
               MIN_FLOW_RATE
         );
      } else if (isJetVentilator) {
         setValue(currentQuestion?.flow_rate);
      } else {
         setValue(selectedOptions[currentQuestion?.id]?.qty ?? currentQuestion?.qty ?? MIN_QTY);
      }
   }, [
      step,
      selectedOptions,
      dummyQuestions,
      currentQuestion?.flow_rate,
      currentQuestion?.id,
      currentQuestion?.qty,
      isJetVentilator,
      isJetVentilatorSelected,
   ]);

   const updateDummyQuestions = (id, updatedData) => {
      setDummyQuestions((prev) =>
         prev.map((question) => (question.id === id ? { ...question, ...updatedData } : question))
      );

      dispatch(
         setSelectedOptions({
            [id]: {
               ...selectedOptions[id],
               ...updatedData,
            },
         })
      );
   };

   const handleChange = (e) => {
      const newValue = parseInt(e.target.value, 10);
      setValue(newValue);

      const updatedData =
         isJetVentilator && isJetVentilatorSelected ? { flow_rate: newValue } : { qty: newValue };

      updateDummyQuestions(currentQuestion.id, updatedData);
   };

   const handleIncrement = () => {
      setValue((prevValue) => {
         const newValue =
            isJetVentilator && isJetVentilatorSelected
               ? Math.min(prevValue + 1, MAX_FLOW_RATE)
               : Math.min(prevValue + 1, MAX_QTY);

         updateDummyQuestions(
            currentQuestion.id,
            isJetVentilator && isJetVentilatorSelected ? { flow_rate: newValue } : { qty: newValue }
         );
         return newValue;
      });
   };

   const handleDecrement = () => {
      setValue((prevValue) => {
         const newValue =
            isJetVentilator && isJetVentilatorSelected
               ? Math.max(prevValue - 1, MIN_FLOW_RATE)
               : Math.max(prevValue - 1, MIN_QTY);

         updateDummyQuestions(
            currentQuestion.id,
            isJetVentilator && isJetVentilatorSelected ? { flow_rate: newValue } : { qty: newValue }
         );
         return newValue;
      });
   };

   const handleJetVentilatorSelection = (option) => {
      updateDummyQuestions(currentQuestion.id, { jetVentilator: option });
      dispatch(
         setSelectedOptions({ [currentQuestion.id]: { ...currentQuestion, jetVentilator: option } })
      );
   };

   const handleNavigation = (newStep) => {
      dispatch(setStep(newStep));
      setDirection(newStep > step ? 1 : -1);
   };

   const handleSubmit = () => {
      const finalData = dummyQuestions.map((question) => {
         const selected = selectedOptions[question.id] || {};
         return {
            id: question.id,
            question: question.question,
            qty: selected.qty ?? question.qty,
            flow_rate:
               selected.jetVentilator === 'Yes'
                  ? selected.flow_rate ?? question.flow_rate
                  : question.flow_rate,
            diversity_factor: question.diversity_factor,
         };
      });

      dispatch(setSelectedOptions(finalData));
      dispatch(setResultPage(true));
   };

   return {
      step,
      direction,
      currentQuestion,
      value,
      isJetVentilator,
      isJetVentilatorSelected,
      handleChange,
      handleIncrement,
      handleDecrement,
      handleJetVentilatorSelection,
      handleNavigation,
      handleSubmit,
   };
};

export default useQuestionLogic;
