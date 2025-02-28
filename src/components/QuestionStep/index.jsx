import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import useQuestionLogic from '@/hooks/useQuestionStep';
import styled from 'styled-components';

import {
   ImageContainer,
   QuestionContainer,
   QuestionTitle,
   ButtonContainer,
   Button,
   Layout,
} from '@styles/selectionStyle';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import RangeSliderSelect from '@/components/Slider';

import image1 from '@assets/images/image1.jpg';
import image2 from '@assets/images/image2.jpg';
import image3 from '@assets/images/image3.jpg';
import image4 from '@assets/images/image4.jpg';

const MIN_QTY = 0;
const MAX_QTY = 20;
const MIN_FLOW_RATE = 1;
const MAX_FLOW_RATE = 60;

const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 3000,
};

const QuestionStep = ({ questions }) => {
   const {
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
   } = useQuestionLogic(questions);

   return (
      <>
         <Layout>
            <Slider {...settings}>
               <ImageContainer>
                  <img src={image1} alt="Oxygen Concentrator" />
               </ImageContainer>
               <ImageContainer>
                  <img src={image2} alt="Medical Equipment" />
               </ImageContainer>
               <ImageContainer>
                  <img src={image3} alt="Medical Equipment" />
               </ImageContainer>
               <ImageContainer>
                  <img src={image4} alt="Medical Equipment" />
               </ImageContainer>
            </Slider>

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
                        {step + 1}. {currentQuestion?.question}
                     </QuestionTitle>

                     {isJetVentilator ? (
                        <>
                           <ButtonGroup>
                              <Button
                                 primary={isVentilatorSelected}
                                 onClick={() => handleJetVentilatorSelection('Yes')}
                              >
                                 Yes
                              </Button>
                              <Button
                                 primary={!isVentilatorSelected}
                                 onClick={() => handleJetVentilatorSelection('No')}
                              >
                                 No
                              </Button>
                           </ButtonGroup>
                           {isVentilatorSelected && (
                              <>
                                 <NumberDisplay>{value} LPM</NumberDisplay>
                                 <RangeSliderSelect
                                    value={value}
                                    min={MIN_FLOW_RATE}
                                    max={MAX_FLOW_RATE}
                                    onChange={handleChange}
                                    step={1}
                                 />
                                 <ButtonGroup>
                                    <Button onClick={handleDecrement}>−</Button>
                                    <Button onClick={handleIncrement}>+</Button>
                                 </ButtonGroup>
                              </>
                           )}
                        </>
                     ) : (
                        <>
                           <NumberDisplay>{value}</NumberDisplay>
                           <RangeSliderSelect
                              value={value}
                              min={MIN_QTY}
                              max={MAX_QTY}
                              onChange={handleChange}
                              step={1}
                           />
                           <ButtonGroup>
                              <Button onClick={handleDecrement}>−</Button>
                              <Button onClick={handleIncrement}>+</Button>
                           </ButtonGroup>
                        </>
                     )}
                  </motion.div>
               </AnimatePresence>
            </QuestionContainer>
         </Layout>

         <ButtonContainer>
            <Button disabled={step === 0} onClick={() => handleNavigation(step - 1)}>
               Prev
            </Button>
            {step === questions.length - 1 ? (
               <Button primary onClick={handleSubmit}>
                  Submit
               </Button>
            ) : (
               <Button primary onClick={() => handleNavigation(step + 1)}>
                  Next
               </Button>
            )}
         </ButtonContainer>
      </>
   );
};
// Styled Components
const NumberDisplay = styled.div`
   display: inline-block;
   background: white;
   padding: 1rem 4rem;
   border-radius: 10px;
   border: 1px solid #e5e7eb;
   font-size: 31px;
   color: #14b8a6;
   font-weight: 600;
   margin-bottom: 1.5rem;
`;

const ButtonGroup = styled.div`
   display: flex;
   justify-content: center;
   gap: 1rem;
   margin-bottom: 1.5rem;
`;

QuestionStep.propTypes = {
   questions: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         question: PropTypes.string.isRequired,
         qty: PropTypes.number,
         flow_rate: PropTypes.number,
         diversity_factor: PropTypes.number,
         jetVentilator: PropTypes.string,
      })
   ).isRequired,
};

export default QuestionStep;
