import { useDispatch, useSelector } from 'react-redux';
import { setStep, setSelectedOptions, setResultPage } from '@redux/slices/selectionSlice';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import {
   ImageContainer,
   QuestionContainer,
   QuestionTitle,
   Options,
   Option,
   OptionText,
   CustomRadio,
   HiddenRadio,
   ButtonContainer,
   Button,
   Layout,
} from '@styles/selectionStyle';
import { useState } from 'react';
import image1 from '@assets/images/image1.jpg';

const QuestionStep = ({ questions }) => {
   const dispatch = useDispatch();
   const { step, selectedOptions } = useSelector((state) => state.selection);
   const [direction, setDirection] = useState(1); // 1 for Next, -1 for Prev

   const handleOptionSelect = (value) => {
      dispatch(setSelectedOptions({ [step]: value }));
   };

   const handleNavigation = (newStep) => {
      setDirection(newStep > step ? 1 : -1); // Set animation direction
      dispatch(setStep(newStep));
   };

   const handleSubmit = () => {
      alert(`selected options ${JSON.stringify(selectedOptions)}`);
      dispatch(setResultPage(true));
   };

   const filteredQuestions = questions.filter((q) => {
      if (q.id === 5 && selectedOptions[3] === 'B. No') {
         return false; // Skip question 5
      }
      return true;
   });

   const handleNext = () => {
      if (filteredQuestions[step].id === 4 && selectedOptions[step] === 'B. No') {
         handleSubmit();
      } else {
         handleNavigation(step + 1);
      }
   };

   return (
      <>
         <Layout>
            {/* ✅ Animated Image Section */}
            <ImageContainer>
               <img src={image1} alt="Oxygen Concentrator" />
            </ImageContainer>
            <ImageContainer>
               {/* <AnimatePresence mode="wait">
                  <MotionImgContainer
                     key={questions[step]?.image}
                     src={questions[step]?.image}
                     alt="Question related"
                     //  initial={{ opacity: 0, x: direction * 100 }}
                     //  animate={{ opacity: 1, x: 0 }}
                     //  exit={{ opacity: 0, x: -direction * 100 }}
                     //  transition={{ type: 'tween', duration: 0.5 }}
                     //  style={{ width: '100%', borderRadius: '10px' }}
                  />
               </AnimatePresence> */}
            </ImageContainer>

            {/* ✅ Animated Question Section */}
            <QuestionContainer>
               <AnimatePresence mode="wait">
                  <motion.div
                     key={step}
                     initial={{ opacity: 0, x: direction * 100 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -direction * 100 }}
                     transition={{ type: 'tween', duration: 0.5 }}
                  >
                     <QuestionTitle>
                        {step + 1}. {questions[step]?.question}
                     </QuestionTitle>

                     {/* ✅ Animated Options Section */}
                     <Options>
                        {questions[step]?.options.map((option, index) => (
                           <Option key={index} selected={selectedOptions[step] === option.value}>
                              <HiddenRadio
                                 type="radio"
                                 name="option"
                                 value={option.value}
                                 checked={selectedOptions[step] === option.value}
                                 onChange={() => handleOptionSelect(option.value)}
                              />
                              <OptionText>{option.label}</OptionText>
                              <CustomRadio checked={selectedOptions[step] === option.value} />
                           </Option>
                        ))}
                     </Options>

                     {/* ✅ "Other Option" Input */}
                     {/* <OtherOption>
                        <HiddenRadio
                           type="radio"
                           name="option"
                           value="Other Option"
                           checked={selectedOptions[step] === 'Other Option'}
                           onChange={() => handleOptionSelect('Other Option')}
                        />
                        <CustomRadio checked={selectedOptions[step] === 'Other Option'} />
                        <OptionText>Other Option</OptionText>
                     </OtherOption> */}
                  </motion.div>
               </AnimatePresence>
            </QuestionContainer>
         </Layout>

         {/* ✅ Navigation Buttons */}
         <ButtonContainer>
            <Button disabled={step === 0} onClick={() => handleNavigation(step - 1)}>
               Prev
            </Button>
            {step === questions.length - 1 ? (
               <Button primary disabled={!selectedOptions[step]} onClick={handleSubmit}>
                  Submit
               </Button>
            ) : (
               <Button primary disabled={!selectedOptions[step]} onClick={handleNext}>
                  Next
               </Button>
            )}
         </ButtonContainer>
      </>
   );
};

QuestionStep.propTypes = {
   questions: PropTypes.arrayOf(
      PropTypes.shape({
         question: PropTypes.string.isRequired,
         options: PropTypes.arrayOf(
            PropTypes.shape({
               value: PropTypes.string.isRequired,
               label: PropTypes.string.isRequired,
            })
         ).isRequired,
         image: PropTypes.string,
      })
   ).isRequired,
};

export default QuestionStep;
