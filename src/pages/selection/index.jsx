import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
   Container,
   Title,
   Subtitle,
   Steps,
   StepWrapper,
   Step,
   StepText,
   StepLine,
   ContentContainer,
   ImageContainer,
   QuestionContainer,
   QuestionTitle,
   Options,
   Option,
   OptionText,
   CustomRadio,
   HiddenRadio,
   OtherOption,
   ButtonContainer,
   Button,
   ResultContainer,
   ResultBox,
   KeyBenefits,
} from './styles';

// Import images from assets
import image1 from '@assets/images/ON2-Photoroom_1.jpg';
import image2 from '@assets/images/ON2-Photoroom_3.jpg';
import image3 from '@assets/images/ON2-Photoroom_4.jpg';

const questions = [
   {
      id: 1,
      question: 'How many anesthesia machines do you use?',
      options: ['A. 1-5', 'B. 5-10', 'C. 10-20'],
      image: image1,
   },
   {
      id: 2,
      question: 'How many oxygen cylinders do you need?',
      options: ['A. 10', 'B. 20', 'C. 30'],
      image: image2,
   },
   {
      id: 3,
      question: 'What is your expected daily oxygen usage?',
      options: ['A. Low', 'B. Medium', 'C. High'],
      image: image3,
   },
];

const CylinderSelection = () => {
   const [step, setStep] = useState(0);
   const [selectedOptions, setSelectedOptions] = useState({});
   const [resultPage, setResultPage] = useState(false);

   const handleOptionSelect = (option) => {
      setSelectedOptions((prev) => ({
         ...prev,
         [step]: option,
      }));
   };

   const handleNavigation = (direction) => {
      setStep((prev) => prev + direction);
   };

   const handleSubmit = () => {
      console.log('Selected Options:', selectedOptions);
      setResultPage(true);
   };

   return (
      <Container>
         {/* Dynamic Title & Subtitle Based on Conditional Rendering */}
         <Title>{resultPage ? 'System Pricing' : 'ON2 SYSTEM SELECTION'}</Title>
         <Subtitle>
            {resultPage
               ? 'Based on your clinic requirements the below system will meet your Needs'
               : 'Find the right oxygen plant for your facility'}
         </Subtitle>

         {/* Progress Steps */}
         {/* Progress Steps */}
         <Steps>
            {questions.map((_, index) => (
               <StepWrapper key={index}>
                  <Step active={!resultPage && index === step}>{index + 1}</Step>
                  <StepText active={!resultPage && index === step}>Step</StepText>
                  {index !== questions.length && <StepLine active={index < step} />}
               </StepWrapper>
            ))}

            {/* ✅ Fix: Highlight the "Result" step only when resultPage is true */}
            <StepWrapper>
               <Step active={resultPage}>6</Step>
               <StepText active={resultPage}>Result</StepText>
            </StepWrapper>
         </Steps>

         <ContentContainer>
            {/* Conditionally render the left image only if resultPage is false */}
            {!resultPage && (
               <ImageContainer>
                  <AnimatePresence mode="wait">
                     <motion.img
                        key={questions[step]?.image}
                        src={questions[step]?.image}
                        alt="Oxygen Plant"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ type: 'tween', duration: 0.5 }}
                     />
                  </AnimatePresence>
               </ImageContainer>
            )}

            {/* Conditionally Render Questions or Result Page */}
            {!resultPage ? (
               <QuestionContainer>
                  <AnimatePresence mode="wait">
                     <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ type: 'tween', duration: 0.5 }}
                     >
                        <QuestionTitle>
                           {step + 1}. {questions[step]?.question}
                        </QuestionTitle>
                        <Options>
                           {questions[step]?.options.map((option, index) => (
                              <Option key={index} selected={selectedOptions[step] === option}>
                                 <HiddenRadio
                                    type="radio"
                                    name="option"
                                    value={option}
                                    checked={selectedOptions[step] === option}
                                    onChange={() => handleOptionSelect(option)}
                                 />
                                 <OptionText>{option}</OptionText>
                                 <CustomRadio checked={selectedOptions[step] === option} />
                              </Option>
                           ))}
                        </Options>

                        {/* Other Option (Separate Below) */}
                        <OtherOption>
                           <HiddenRadio
                              type="radio"
                              name="option"
                              value="Other Option"
                              checked={selectedOptions[step] === 'Other Option'}
                              onChange={() => handleOptionSelect('Other Option')}
                           />
                           <CustomRadio checked={selectedOptions[step] === 'Other Option'} />
                           <OptionText>Other Option</OptionText>
                        </OtherOption>
                     </motion.div>
                  </AnimatePresence>
               </QuestionContainer>
            ) : (
               // Render Result Page
               <ResultContainer>
                  <Title>Recommended Oxygen Concentrator</Title>
                  <ImageContainer>
                     <img src={image1} alt="Oxygen Concentrator" />
                  </ImageContainer>
                  <ResultBox>
                     <h3>
                        Recommended OC <strong>Aura® 10 Nano</strong>
                     </h3>
                     <p>
                        Quantity: <button>+</button> 1 <button>-</button>
                     </p>
                     <p>
                        Total Retail Price: <strong>CAD $7,428.75</strong>
                     </p>
                     <p>
                        EMI Plan: <strong>CAD $619.06/mo. for 12 mo.*</strong>
                     </p>
                     <p>
                        5 Year Weekly Lease Plan: <strong>CAD $34.29</strong>
                     </p>
                     <p>
                        5 Year Monthly Lease Plan: <strong>CAD $158.77</strong>
                     </p>
                  </ResultBox>

                  <KeyBenefits>
                     <h4>Key Benefits for You</h4>
                     <ul>
                        <li>5-year warranty including parts/labor/shipping.</li>
                        <li>Own it for $1.00 at the end of 5 years.</li>
                        <li>Can extend lease or buy warranty.</li>
                        <li>Manufacturer covers all repair/maintenance costs.</li>
                        <li>Remote monitoring available.</li>
                     </ul>
                  </KeyBenefits>

                  <ButtonContainer>
                     <Button onClick={() => setResultPage(false)}>Prev</Button>
                     <Button primary>Purchase Now</Button>
                  </ButtonContainer>
               </ResultContainer>
            )}
         </ContentContainer>

         {/* Navigation Buttons */}
         {!resultPage && (
            <ButtonContainer>
               <Button disabled={step === 0} onClick={() => handleNavigation(-1)}>
                  Prev
               </Button>
               {step === questions.length - 1 ? (
                  <Button primary onClick={handleSubmit}>
                     Submit
                  </Button>
               ) : (
                  <Button primary onClick={() => handleNavigation(1)}>
                     Next
                  </Button>
               )}
            </ButtonContainer>
         )}
      </Container>
   );
};

export default CylinderSelection;
