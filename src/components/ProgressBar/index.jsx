import { useSelector } from 'react-redux';
import { Steps, StepWrapper, Step, StepText, StepLine } from '@styles/selectionStyle';
import PropTypes from 'prop-types';

const ProgressBar = ({ questions }) => {
   const { step, resultPage } = useSelector((state) => state.selection);

   return (
      <Steps>
         {questions.map((_, index) => (
            <StepWrapper key={index}>
               <Step active={!resultPage && index <= step}>{index + 1}</Step>
               <StepText active={!resultPage && index === step}>Step</StepText>
               {index !== questions.length && <StepLine active={index < step} />}
            </StepWrapper>
         ))}

         {/* ✅ Ensure the "Result" step is highlighted correctly */}
         <StepWrapper>
            <Step active={resultPage}>{questions?.length + 1}</Step>
            <StepText active={resultPage}>Result</StepText>
         </StepWrapper>
      </Steps>
   );
};

ProgressBar.propTypes = {
   questions: PropTypes.array.isRequired,
};

export default ProgressBar;
